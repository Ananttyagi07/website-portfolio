import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, BookOpen, Play, ExternalLink } from 'lucide-react';
import { tutorials } from '@/data/portfolio';

export const TutorialsSection = () => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'neon-lime';
      case 'intermediate': return 'neon-cyan';
      case 'advanced': return 'neon-magenta';
      default: return 'neon-cyan';
    }
  };

  const getLevelGlow = (level: string) => {
    switch (level) {
      case 'beginner': return 'glow-ring-lime';
      case 'intermediate': return 'glow-ring-cyan';
      case 'advanced': return 'glow-ring-magenta';
      default: return 'glow-ring-cyan';
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-5xl md:text-6xl font-orbitron font-bold neon-magenta">
            KNOWLEDGE BASE
          </h1>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Deep-dive tutorials and guides for mastering AI and DevOps technologies
          </p>
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <Card 
              key={tutorial.slug}
              className={`hologram ${getLevelGlow(tutorial.level)} bg-card/80 backdrop-blur-sm animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="font-orbitron text-lg matrix-text flex-1">
                    {tutorial.title}
                  </CardTitle>
                  <Badge className={`${getLevelColor(tutorial.level)} bg-transparent`}>
                    {tutorial.level.toUpperCase()}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span className="font-jetbrains">{tutorial.minutes}min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span className="font-jetbrains">Tutorial</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground font-inter">
                  {tutorial.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {tutorial.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    className="glow-ring-cyan flex-1"
                  >
                    <Play className="h-3 w-3 mr-2" />
                    START
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="glow-ring-lime"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <Card className="glow-ring-cyan bg-card/50 backdrop-blur-sm max-w-md mx-auto">
            <CardContent className="p-8 space-y-4">
              <div className="text-4xl opacity-50">🚀</div>
              <h3 className="font-orbitron text-xl neon-cyan">MORE TUTORIALS LOADING...</h3>
              <p className="text-sm text-muted-foreground">
                Advanced courses on ML Ops, Infrastructure as Code, and Cloud Architecture coming soon
              </p>
              <Button variant="outline" className="glow-ring-lime">
                GET NOTIFIED
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};