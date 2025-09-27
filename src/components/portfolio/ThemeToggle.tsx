import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        className="relative p-3 glass-panel rounded-full hover:glow-cyan transition-all duration-300 hover:scale-110 group overflow-hidden"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        title={`${theme === 'dark' ? 'Light' : 'Dark'} mode (Ctrl+Shift+T)`}
      >
        {/* Animated background */}
        <div 
          className={`absolute inset-0 rounded-full transition-all duration-500 ease-in-out ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-primary/10 to-secondary/10 scale-100' 
              : 'bg-gradient-to-r from-accent/10 to-secondary/10 scale-100'
          }`} 
        />
        
        {/* Icon container with smooth transition */}
        <div className="relative w-6 h-6 overflow-hidden">
          {/* Dark mode icon (Moon) */}
          <div 
            className={`absolute inset-0 transition-all duration-500 ease-in-out flex items-center justify-center ${
              theme === 'dark' 
                ? 'transform translate-y-0 opacity-100 rotate-0' 
                : 'transform -translate-y-full opacity-0 rotate-180'
            }`}
          >
            <Moon 
              size={20} 
              className="text-primary group-hover:text-glow transition-all duration-300" 
            />
          </div>
          
          {/* Light mode icon (Sun) */}
          <div 
            className={`absolute inset-0 transition-all duration-500 ease-in-out flex items-center justify-center ${
              theme === 'light' 
                ? 'transform translate-y-0 opacity-100 rotate-0' 
                : 'transform translate-y-full opacity-0 -rotate-180'
            }`}
          >
            <Sun 
              size={20} 
              className="text-accent group-hover:text-glow transition-all duration-300" 
            />
          </div>
        </div>
        
        {/* Glow effect indicator */}
        <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          theme === 'dark' ? 'glow-cyan' : 'glow-pink'
        }`} />
      </button>
      
      {/* Tooltip indicator */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="glass-panel px-2 py-1 rounded text-xs text-muted-foreground whitespace-nowrap">
          {theme === 'dark' ? 'Light' : 'Dark'} mode
        </div>
      </div>
    </div>
  );
};