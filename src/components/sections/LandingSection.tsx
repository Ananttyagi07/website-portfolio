import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Cpu, Database, Cloud, Activity, GitBranch, Users, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import HologramTitle from '@/components/HologramTitle';
import GlowingAvatar from '@/components/GlowingAvatar';
import robotLight from '@/robot-light.png';
import robotDark from '@/robot-dark.png';

export const LandingSection = () => {
  const [stats, setStats] = useState({
    years: 0,
    deploys: 0,
    uptime: 0,
    stars: 0
  });

  const targetStats = {
    years: 3,
    deploys: 284,
    uptime: 99.9,
    stars: 124
  };

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          years: Math.floor(targetStats.years * progress),
          deploys: Math.floor(targetStats.deploys * progress),
          uptime: Math.min(targetStats.uptime, (targetStats.uptime * progress)),
          stars: Math.floor(targetStats.stars * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setStats(targetStats);
        }
      }, stepDuration);
    };

    animateCounters();
  }, []);

  const dataStreams = [
    '> Initializing neural pathways...',
    '> Kubernetes cluster: HEALTHY',
    '> ML pipelines: 15 ACTIVE',
    '> CI/CD: 7 deployments today',
    '> Infrastructure: 0 alerts',
    '> Security scan: PASSED',
    '> Performance: 99.9% SLA',
    '> Monitoring: ALL SYSTEMS GO'
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      {/* <div className="absolute inset-0 scanlines opacity-0" /> */}
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 min-h-screen flex items-center justify-center relative z-10">
        <div className="text-center space-y-8 max-w-4xl">
          {/* Main Headline */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-orbitron font-bold">
              <span className="neon-cyan">AI</span>
              <span className="text-foreground"> × </span>
              <span className="neon-lime">DEVOPS</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-orbitron font-medium text-foreground">
              ENGINEER
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground font-inter max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Building the future with intelligent infrastructure and autonomous systems
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="glow-ring-cyan font-orbitron text-lg px-8 py-4"
            >
              <Users className="mr-2 h-5 w-5" />
              HIRE ME
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glow-ring-lime font-orbitron text-lg px-8 py-4"
            >
              VIEW PROJECTS
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
            <Card className="hologram glow-ring-cyan bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-orbitron font-bold neon-cyan">{stats.years}</div>
                <div className="text-sm text-muted-foreground font-jetbrains">YEARS</div>
              </CardContent>
            </Card>
            
            <Card className="hologram glow-ring-lime bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-orbitron font-bold neon-lime">{stats.deploys.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground font-jetbrains">DEPLOYS</div>
              </CardContent>
            </Card>
            
            <Card className="hologram glow-ring-magenta bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-orbitron font-bold neon-magenta">{stats.uptime.toFixed(1)}%</div>
                <div className="text-sm text-muted-foreground font-jetbrains">UPTIME</div>
              </CardContent>
            </Card>
            
            <Card className="hologram glow-ring-cyan bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-orbitron font-bold neon-cyan">{stats.stars.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground font-jetbrains">STARS</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Hologram Title */}
      <HologramTitle />
      
      {/* Glowing Avatar with Theme Support */}
      <div className="absolute left-8 bottom-1/4 robot-shadow-light" style={{ animationDelay: '3s', marginLeft: '100px' }}>
        <GlowingAvatar 
          lightImg={robotLight}
          darkImg={robotDark}
        />
      </div>

      {/* Data Streams */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 space-y-2 hidden lg:block animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
        <div className="w-80 bg-card/80 backdrop-blur-sm rounded-lg p-4 glow-ring-cyan">
          <div className="flex items-center gap-2 mb-3">
            <Activity className="h-4 w-4 neon-cyan" />
            <span className="font-orbitron text-sm neon-cyan">DATA STREAM</span>
          </div>
          <div className="space-y-1 max-h-48 overflow-hidden">
            {dataStreams.map((stream, index) => (
              <div 
                key={index}
                className="text-xs font-jetbrains text-muted-foreground animate-fade-in"
                style={{ animationDelay: `${1 + index * 0.2}s` }}
              >
                {stream}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Cpu className="absolute top-1/4 left-1/4 h-8 w-8 text-primary/20 animate-float" style={{ animationDelay: '0s' }} />
        <Database className="absolute top-3/4 left-1/3 h-6 w-6 text-secondary/20 animate-float" style={{ animationDelay: '2s' }} />
        <Cloud className="absolute top-1/3 right-1/4 h-10 w-10 text-tertiary/20 animate-float" style={{ animationDelay: '4s' }} />
        <GitBranch className="absolute bottom-1/4 right-1/3 h-7 w-7 text-primary/20 animate-float" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};
