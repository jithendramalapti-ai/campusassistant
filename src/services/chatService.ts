import { campusDataService } from './campusDataService';
import { Message, CampusInfo } from '../types';

class ChatService {
  private getGreetingResponse(): string {
    const greetings = [
      "Hello! I'm your campus assistant. I can help you find information about schedules, facilities, dining, library services, and administrative procedures. What would you like to know?",
      "Hi there! I'm here to help with all your campus questions. Whether you need info about classes, dining options, or campus facilities, just ask!",
      "Welcome! I can assist you with campus information including library hours, dining locations, parking, registration, and much more. How can I help you today?"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  private getNotFoundResponse(query: string): string {
    const suggestions = campusDataService.getPopularInfo().slice(0, 3);
    const suggestionText = suggestions.length > 0 
      ? ` Here are some popular topics I can help with: ${suggestions.map(s => s.title).join(', ')}.`
      : '';
    
    return `I'm sorry, I couldn't find specific information about "${query}".${suggestionText} You can also try asking about schedules, facilities, dining, library services, or administrative procedures.`;
  }

  private formatResponse(info: CampusInfo): string {
    let response = `**${info.title}**\n\n${info.content}`;
    
    if (info.details) {
      response += '\n\n**Additional Details:**\n';
      
      Object.entries(info.details).forEach(([key, value]) => {
        if (typeof value === 'string') {
          response += `• **${key.charAt(0).toUpperCase() + key.slice(1)}:** ${value}\n`;
        } else if (Array.isArray(value)) {
          response += `• **${key.charAt(0).toUpperCase() + key.slice(1)}:**\n`;
          value.forEach(item => response += `  - ${item}\n`);
        } else if (typeof value === 'object') {
          response += `• **${key.charAt(0).toUpperCase() + key.slice(1)}:**\n`;
          Object.entries(value).forEach(([subKey, subValue]) => {
            if (typeof subValue === 'string') {
              response += `  - **${subKey}:** ${subValue}\n`;
            } else if (Array.isArray(subValue)) {
              response += `  - **${subKey}:** ${subValue.join(', ')}\n`;
            }
          });
        }
      });
    }
    
    return response;
  }

  private categorizeQuery(query: string): string {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('help') || lowerQuery.trim() === '') {
      return 'greeting';
    }
    
    if (lowerQuery.includes('thank') || lowerQuery.includes('bye') || lowerQuery.includes('goodbye')) {
      return 'closing';
    }
    
    return 'information';
  }

  async processQuery(query: string): Promise<string> {
    const category = this.categorizeQuery(query);
    
    if (category === 'greeting') {
      return this.getGreetingResponse();
    }
    
    if (category === 'closing') {
      return "You're welcome! Feel free to ask if you need any more campus information. Have a great day!";
    }
    
    // Search for relevant information
    const results = campusDataService.searchByKeywords(query);
    
    if (results.length === 0) {
      return this.getNotFoundResponse(query);
    }
    
    if (results.length === 1) {
      return this.formatResponse(results[0]);
    }
    
    // Multiple results - provide the best match plus alternatives
    const bestMatch = results[0];
    const alternatives = results.slice(1, 3);
    
    let response = this.formatResponse(bestMatch);
    
    if (alternatives.length > 0) {
      response += '\n\n**You might also be interested in:**\n';
      alternatives.forEach(alt => {
        response += `• ${alt.title}\n`;
      });
    }
    
    return response;
  }

  generateTypingDelay(): number {
    // Simulate realistic typing delay based on response length
    return Math.random() * 1500 + 500; // 500-2000ms
  }
}

export const chatService = new ChatService();