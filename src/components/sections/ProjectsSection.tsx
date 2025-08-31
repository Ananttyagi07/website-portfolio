import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { ExternalLink, Github, FileText, Search } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { Category, Project } from '@/types';

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all' as const, label: 'ALL SYSTEMS', color: 'neon-cyan' },
    { id: 'devops' as const, label: 'DEVOPS', color: 'neon-cyan' },
    { id: 'ai' as const, label: 'AI/ML', color: 'neon-lime' },
    { id: 'cloud' as const, label: 'CLOUD', color: 'neon-magenta' },
    { id: 'web' as const, label: 'WEB DEV', color: 'neon-cyan' },
    { id: 'advanced' as const, label: 'ADVANCED', color: 'neon-magenta' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category.includes(selectedCategory as Category);
    const matchesSearch = searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.stack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getLinkIcon = (type: string) => {
    switch (type) {
      case 'repo': return Github;
      case 'demo': return ExternalLink;
      case 'case': return FileText;
      default: return ExternalLink;
    }
  };

  const getProjectGlow = (project: Project) => {
    if (project.category.includes('ai')) return 'glow-ring-lime';
    if (project.category.includes('devops')) return 'glow-ring-cyan';
    if (project.category.includes('advanced')) return 'glow-ring-magenta';
    return 'glow-ring-cyan';
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-5xl md:text-6xl font-orbitron font-bold neon-cyan">
            PROJECT MATRIX
          </h1>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Exploring the intersection of artificial intelligence and infrastructure automation
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects, technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 glow-ring-cyan bg-card/50 backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Category Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className={`font-orbitron ${
                selectedCategory === category.id 
                  ? `animate-pulse-glow ${category.color}` 
                  : 'hover:glow-ring-lime'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`hologram ${getProjectGlow(project)} bg-card/80 backdrop-blur-sm animate-fade-in-up transform-3d perspective-1000`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="font-orbitron text-lg matrix-text">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge className="neon-magenta bg-tertiary/20">
                      FEATURED
                    </Badge>
                  )}
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.category.map(cat => (
                    <Badge key={cat} variant="secondary" className="text-xs">
                      {cat.toUpperCase()}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground font-inter">
                  {project.summary}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1">
                  {project.stack.map(tech => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Metrics */}
                {project.metrics && (
                  <div className="space-y-2">
                    {project.metrics.map(metric => (
                      <div key={metric.label} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{metric.label}</span>
                        <span className="neon-lime font-jetbrains">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Links */}
                {project.links && (
                  <div className="flex gap-2 pt-2">
                    {project.links.map(link => {
                      const Icon = getLinkIcon(link.type);
                      return (
                        <Button
                          key={link.type}
                          variant="outline"
                          size="sm"
                          className="glow-ring-cyan hover:glow-ring-lime"
                        >
                          <Icon className="h-3 w-3 mr-1" />
                          {link.type.toUpperCase()}
                        </Button>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl opacity-20 mb-4">🔍</div>
            <h3 className="text-xl font-orbitron mb-2">NO PROJECTS FOUND</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or category filter
            </p>
          </div>
        )}
      </div>
    </div>
  );
};