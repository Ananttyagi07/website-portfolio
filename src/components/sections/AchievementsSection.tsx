import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, Star, Trophy, Shield, Zap, Crown } from 'lucide-react';
import { badges } from '@/data/portfolio';
import { Badge as BadgeType } from '@/types';

export const AchievementsSection = () => {
  const [selectedBadge, setSelectedBadge] = useState<BadgeType | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const rarityConfig = {
    common: {
      color: 'text-muted-foreground',
      glow: 'glow-ring-cyan',
      icon: Star,
      count: badges.filter(b => b.rarity === 'common').length
    },
    rare: {
      color: 'neon-cyan',
      glow: 'glow-ring-cyan',
      icon: Award,
      count: badges.filter(b => b.rarity === 'rare').length
    },
    epic: {
      color: 'neon-lime',
      glow: 'glow-ring-lime',
      icon: Trophy,
      count: badges.filter(b => b.rarity === 'epic').length
    },
    legendary: {
      color: 'neon-magenta',
      glow: 'glow-ring-magenta',
      icon: Crown,
      count: badges.filter(b => b.rarity === 'legendary').length
    }
  };

  const categoryProgress = {
    project: (badges.filter(b => b.category === 'project').length / badges.length) * 100,
    award: (badges.filter(b => b.category === 'award').length / badges.length) * 100,
    skill: (badges.filter(b => b.category === 'skill').length / badges.length) * 100
  };

  const filteredBadges = filterCategory === 'all' 
    ? badges 
    : badges.filter(badge => badge.category === filterCategory);

  const handleBadgeClick = (badge: BadgeType) => {
    setSelectedBadge(selectedBadge?.id === badge.id ? null : badge);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-5xl md:text-6xl font-orbitron font-bold neon-magenta">
            ACHIEVEMENTS
          </h1>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Collectible achievements showcasing expertise and milestones in AI and DevOps
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {Object.entries(rarityConfig).map(([rarity, config]) => {
            const Icon = config.icon;
            return (
              <Card key={rarity} className={`${config.glow} bg-card/80 backdrop-blur-sm text-center`}>
                <CardContent className="p-4">
                  <Icon className={`h-6 w-6 mx-auto mb-2 ${config.color}`} />
                  <div className={`text-2xl font-orbitron font-bold ${config.color}`}>
                    {config.count}
                  </div>
                  <div className="text-xs text-muted-foreground font-jetbrains">
                    {rarity.toUpperCase()}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Category Progress */}
        <Card className="glow-ring-cyan bg-card/80 backdrop-blur-sm mb-8">
          <CardContent className="p-6">
            <h3 className="font-orbitron text-lg mb-4 neon-cyan">COMPLETION PROGRESS</h3>
            <div className="space-y-4">
              {Object.entries(categoryProgress).map(([category, progress]) => (
                <div key={category} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-jetbrains capitalize">{category}</span>
                    <span className="neon-lime">{progress.toFixed(0)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Category Filter */}
        <Tabs value={filterCategory} onValueChange={setFilterCategory} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" className="font-orbitron">ALL</TabsTrigger>
            <TabsTrigger value="project" className="font-orbitron">PROJECTS</TabsTrigger>
            <TabsTrigger value="award" className="font-orbitron">AWARDS</TabsTrigger>
            <TabsTrigger value="skill" className="font-orbitron">SKILLS</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Badge Collection */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredBadges.map((badge, index) => {
            const config = rarityConfig[badge.rarity];
            const Icon = config.icon;
            const isSelected = selectedBadge?.id === badge.id;
            
            return (
              <Card 
                key={badge.id}
                className={`
                  ${config.glow} bg-card/80 backdrop-blur-sm cursor-pointer 
                  transition-all duration-300 hover:scale-105 
                  ${isSelected ? 'scale-110 animate-pulse-glow' : ''}
                  animate-fade-in-up perspective-1000 transform-3d
                `}
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => handleBadgeClick(badge)}
              >
                <CardContent className="p-4 text-center space-y-3">
                  <div className="relative">
                    <Icon className={`h-12 w-12 mx-auto ${config.color} animate-float`} />
                    {badge.earnedAt && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-neon-pulse" />
                    )}
                  </div>
                  
                  <div>
                    <h4 className={`font-orbitron text-sm font-bold ${config.color} matrix-text`}>
                      {badge.title}
                    </h4>
                    <Badge variant="outline" className="text-xs mt-1">
                      {badge.rarity.toUpperCase()}
                    </Badge>
                  </div>

                  {isSelected && (
                    <div className="animate-fade-in space-y-2">
                      <p className="text-xs text-muted-foreground font-inter">
                        {badge.description}
                      </p>
                      {badge.earnedAt && (
                        <div className="text-xs text-muted-foreground font-jetbrains">
                          Earned: {new Date(badge.earnedAt).toLocaleDateString()}
                        </div>
                      )}
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="text-xs glow-ring-lime"
                      >
                        CLAIMED!
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievement Hunt */}
        <div className="mt-16 text-center">
          <Card className="glow-ring-magenta bg-card/50 backdrop-blur-sm max-w-md mx-auto">
            <CardContent className="p-8 space-y-4">
              <Shield className="h-12 w-12 neon-magenta mx-auto animate-float" />
              <h3 className="font-orbitron text-xl neon-magenta">LEGENDARY QUEST</h3>
              <p className="text-sm text-muted-foreground">
                Unlock the ultimate achievement by collecting all legendary badges
              </p>
              <Progress 
                value={(badges.filter(b => b.rarity === 'legendary' && b.earnedAt).length / badges.filter(b => b.rarity === 'legendary').length) * 100} 
                className="h-3"
              />
              <div className="text-sm text-muted-foreground font-jetbrains">
                {badges.filter(b => b.rarity === 'legendary' && b.earnedAt).length} / {badges.filter(b => b.rarity === 'legendary').length} Legendary Badges
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};