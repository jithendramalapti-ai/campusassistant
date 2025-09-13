import { campusData } from '../data/campusData';
import { CampusInfo } from '../types';

class CampusDataService {
  private data: CampusInfo[] = campusData;

  searchByKeywords(query: string): CampusInfo[] {
    const keywords = query.toLowerCase().split(' ');
    
    return this.data.filter(item => 
      keywords.some(keyword => 
        item.keywords.some(itemKeyword => 
          itemKeyword.includes(keyword) || keyword.includes(itemKeyword)
        ) ||
        item.title.toLowerCase().includes(keyword) ||
        item.content.toLowerCase().includes(keyword)
      )
    ).sort((a, b) => {
      // Sort by relevance - more keyword matches = higher priority
      const aMatches = keywords.filter(keyword => 
        a.keywords.some(itemKeyword => itemKeyword.includes(keyword))
      ).length;
      const bMatches = keywords.filter(keyword => 
        b.keywords.some(itemKeyword => itemKeyword.includes(keyword))
      ).length;
      return bMatches - aMatches;
    });
  }

  getByCategory(category: CampusInfo['category']): CampusInfo[] {
    return this.data.filter(item => item.category === category);
  }

  getAll(): CampusInfo[] {
    return this.data;
  }

  findBestMatch(query: string): CampusInfo | null {
    const results = this.searchByKeywords(query);
    return results.length > 0 ? results[0] : null;
  }

  getPopularInfo(): CampusInfo[] {
    // Return most commonly requested information
    const popularIds = [
      'library-hours', 'dining-halls', 'parking', 
      'class-schedules', 'registration', 'gym-facilities'
    ];
    
    return popularIds
      .map(id => this.data.find(item => item.id === id))
      .filter(Boolean) as CampusInfo[];
  }
}

export const campusDataService = new CampusDataService();