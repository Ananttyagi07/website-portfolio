import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface BootSequenceProps {
  onComplete: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showSkip, setShowSkip] = useState(false);
  const [currentLog, setCurrentLog] = useState(0);

  const bootLogs = [
    'Initializing neural networks...',
    'Loading AI modules...',
    'Connecting to DevOps pipeline...',
    'Establishing secure channels...',
    'Mounting cloud resources...',
    'Optimizing performance matrices...',
    'Calibrating holographic displays...',
    'System ready. Welcome to the future.'
  ];

  useEffect(() => {
    // Show skip button after 800ms
    const skipTimer = setTimeout(() => setShowSkip(true), 800);

    // Progress animation
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    // Log animation
    const logTimer = setInterval(() => {
      setCurrentLog(prev => (prev + 1) % bootLogs.length);
    }, 400);

    return () => {
      clearTimeout(skipTimer);
      clearInterval(progressTimer);
      clearInterval(logTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      {/* Scanlines effect */}
      {/* <div className="absolute inset-0 scanlines opacity-0" /> */}
      
      {/* Matrix rain effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary opacity-20 font-jetbrains text-sm animate-matrix-rain"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${3 + i * 0.2}s`
            }}
          >
            {Array.from({ length: 20 }, () => 
              String.fromCharCode(0x30A0 + Math.random() * 96)
            ).join('')}
          </div>
        ))}
      </div>

      <div className="text-center space-y-8 max-w-md w-full mx-4 relative z-10">
        {/* Logo */}
        <div className="space-y-4">
          <div 
            className="text-6xl font-orbitron font-bold neon-cyan glitch animate-boot-sequence"
            data-text="AI×DEVOPS"
          >
            AI×DEVOPS
          </div>
          <div className="text-lg text-muted-foreground font-jetbrains">
            NEURAL SYSTEM v2.0.1
          </div>
        </div>

        {/* Progress */}
        <div className="space-y-4">
          <Progress 
            value={progress} 
            className="h-2 bg-muted/20"
          />
          <div className="flex justify-between text-sm font-jetbrains">
            <span className="text-muted-foreground">BOOTING...</span>
            <span className="neon-lime">{progress.toFixed(0)}%</span>
          </div>
        </div>

        {/* Boot logs */}
        <div className="h-20 flex items-center justify-center">
          <div className="text-sm font-jetbrains text-muted-foreground matrix-text">
            {bootLogs[currentLog]}
          </div>
        </div>

        {/* Skip button */}
        {showSkip && (
          <Button
            variant="outline"
            onClick={onComplete}
            className="animate-fade-in glow-ring-cyan"
          >
            SKIP SEQUENCE
          </Button>
        )}
      </div>
    </div>
  );
};