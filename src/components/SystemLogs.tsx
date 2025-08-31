import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Activity, Pause, Play, Trash2, Download } from 'lucide-react';
import { systemLogs } from '@/data/portfolio';
import { LogEntry } from '@/types';

interface SystemLogsProps {
  isVisible: boolean;
  onToggle: () => void;
}

export const SystemLogs: React.FC<SystemLogsProps> = ({ isVisible, onToggle }) => {
  const [logs, setLogs] = useState<LogEntry[]>(systemLogs);
  const [isPaused, setIsPaused] = useState(false);

  const getLevelColor = (level: LogEntry['level']) => {
    switch (level) {
      case 'success': return 'text-secondary';
      case 'warn': return 'text-seagreen';
      case 'error': return 'text-destructive';
      default: return 'text-primary';
    }
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const clearLogs = () => setLogs([]);
  
  const exportLogs = () => {
    const data = JSON.stringify(logs, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'system-logs.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!isVisible) return null;

  return (
    <Card className="w-80 h-96 glow-ring-cyan bg-card/95 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-orbitron flex items-center gap-2">
            <Activity className="h-4 w-4 neon-cyan" />
            SYSTEM LOGS
          </CardTitle>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsPaused(!isPaused)}
              className="h-6 w-6"
            >
              {isPaused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={clearLogs}
              className="h-6 w-6"
            >
              <Trash2 className="h-3 w-3" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={exportLogs}
              className="h-6 w-6"
            >
              <Download className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-72 px-4">
          <div className="space-y-2">
            {logs.map((log, index) => (
              <div key={log.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start gap-2 text-xs font-jetbrains">
                  <span className="text-muted-foreground shrink-0">
                    {formatTime(log.ts)}
                  </span>
                  <Badge variant="secondary" className="text-xs px-1 py-0">
                    {log.level.toUpperCase()}
                  </Badge>
                </div>
                <div className={`text-xs font-jetbrains mt-1 ${getLevelColor(log.level)}`}>
                  {log.message}
                  {log.link && (
                    <a 
                      href={log.link} 
                      className="ml-2 underline hover:text-primary transition-colors"
                    >
                      [VIEW]
                    </a>
                  )}
                </div>
                {index < logs.length - 1 && <Separator className="my-2" />}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};