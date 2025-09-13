import React from 'react';
import { quickActions } from '../data/campusData';
import * as Icons from 'lucide-react';

interface QuickActionsProps {
  onActionClick: (query: string) => void;
  visible: boolean;
}

const QuickActions: React.FC<QuickActionsProps> = ({ onActionClick, visible }) => {
  if (!visible) return null;

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ size: number }>;
    return IconComponent ? <IconComponent size={16} /> : null;
  };

  return (
    <div className="mb-4 px-4">
      <div className="text-sm text-gray-700 mb-3 font-semibold">Quick Actions:</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {quickActions.map((action) => (
          <button
            key={action.id}
            onClick={() => onActionClick(action.query)}
            className="flex items-center gap-2 p-3 bg-white/80 backdrop-blur-md border border-white/30 rounded-lg hover:bg-white/90 hover:border-emerald-300 transition-all duration-300 text-left group shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <div className="text-emerald-500 group-hover:text-emerald-600 transition-colors">
              {getIcon(action.icon)}
            </div>
            <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;