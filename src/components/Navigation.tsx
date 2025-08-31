import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from './ThemeToggle';
import { SystemLogs } from './SystemLogs';
import { 
  Home, 
  FolderOpen, 
  User, 
  Mail, 
  BookOpen, 
  Award,
  Activity,
  Command
} from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const [showLogs, setShowLogs] = useState(false);

  const navItems = [
    { id: 'landing', label: 'HOME', icon: Home },
    { id: 'projects', label: 'PROJECTS', icon: FolderOpen },
    { id: 'about', label: 'ABOUT', icon: User },
    { id: 'tutorials', label: 'TUTORIALS', icon: BookOpen },
    { id: 'achievements', label: 'ACHIEVEMENTS', icon: Award },
    { id: 'hire', label: 'HIRE ME', icon: Mail },
  ];

  return (
    <>
      {/* Top Navigation Bar */}
<nav className="fixed top-0 left-0 right-0 z-40 bg-background backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="font-orbitron font-bold text-xl neon-cyan">
              AI×DEVOPS
            </div>
            <Badge variant="secondary" className="text-xs font-jetbrains">
              v2.0.1
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                onClick={() => onSectionChange(item.id)}
                className={`font-jetbrains text-xs ${
                  activeSection === item.id 
                    ? 'glow-ring-cyan' 
                    : 'hover:glow-ring-lime'
                }`}
              >
                <item.icon className="h-3 w-3 mr-2" />
                {item.label}
              </Button>
            ))}
          </div>

          {/* System Controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowLogs(!showLogs)}
              className={`glow-ring-cyan ${showLogs ? 'bg-primary text-primary-foreground' : ''}`}
            >
              <Activity className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="glow-ring-cyan"
            >
              <Command className="h-4 w-4" />
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Left Side Navigation (Desktop) */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
        <div className="flex flex-col gap-3">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? 'default' : 'outline'}
              size="icon"
              onClick={() => onSectionChange(item.id)}
              className={`w-12 h-12 ${
                activeSection === item.id 
                  ? 'animate-pulse-glow' 
                  : 'hover:glow-ring-lime'
              }`}
              title={item.label}
            >
              <item.icon className="h-5 w-5" />
            </Button>
          ))}
        </div>
      </div>

      {/* System Logs Panel */}
      <div className="fixed right-4 top-20 z-30">
        <SystemLogs 
          isVisible={showLogs} 
          onToggle={() => setShowLogs(!showLogs)} 
        />
      </div>

      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/90 backdrop-blur-md border-t border-border p-2">
        <div className="flex justify-around">
          {navItems.slice(0, 5).map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onSectionChange(item.id)}
              className="flex-col h-auto py-2"
            >
              <item.icon className="h-4 w-4" />
              <span className="text-xs mt-1">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};