import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  Calendar, 
  DollarSign, 
  CheckCircle, 
  Clock,
  Users,
  Zap,
  Shield,
  Download,
  ExternalLink
} from 'lucide-react';

export const HireSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    timeline: '',
    budget: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    {
      title: 'AI/ML Infrastructure',
      description: 'End-to-end ML pipeline design, model serving, and MLOps implementation',
      duration: '4-12 weeks',
      price: '$15k - $50k',
      features: ['Model Deployment', 'Auto-scaling', 'A/B Testing', 'Monitoring'],
      icon: Zap,
      glow: 'glow-ring-lime'
    },
    {
      title: 'Cloud Migration & DevOps',
      description: 'Complete infrastructure modernization with Kubernetes and cloud-native solutions',
      duration: '6-16 weeks',
      price: '$20k - $75k',
      features: ['Infrastructure as Code', 'CI/CD Pipelines', 'Zero-downtime Migration', 'Security'],
      icon: Shield,
      glow: 'glow-ring-cyan'
    },
    {
      title: 'Consulting & Architecture',
      description: 'Strategic guidance on AI adoption and infrastructure optimization',
      duration: '2-8 weeks',
      price: '$300/hour',
      features: ['Architecture Review', 'Technical Strategy', 'Team Training', 'Best Practices'],
      icon: Users,
      glow: 'glow-ring-magenta'
    }
  ];

  const availability = {
    status: 'AVAILABLE',
    nextSlot: 'January 2025',
    responseTime: '< 24 hours',
    capacity: '2-3 projects'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would normally submit to your backend
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-5xl md:text-6xl font-orbitron font-bold neon-cyan">
            HIRE ME
          </h1>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Let's build the future together with cutting-edge AI and infrastructure solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Services */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-orbitron font-bold neon-lime mb-6">SERVICE PACKAGES</h2>
            
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.title}
                  className={`${service.glow} bg-card/80 backdrop-blur-sm hologram animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="font-orbitron flex items-center gap-3">
                      <Icon className="h-6 w-6 neon-cyan" />
                      {service.title}
                    </CardTitle>
                    <p className="text-muted-foreground font-inter">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="font-jetbrains text-sm">{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span className="font-jetbrains text-sm neon-lime">{service.price}</span>
                      </div>
                      <Button size="sm" className="glow-ring-cyan">
                        DISCUSS PROJECT
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {service.features.map(feature => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Availability */}
            <Card className="glow-ring-lime bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-orbitron flex items-center gap-2">
                  <Calendar className="h-5 w-5 neon-lime" />
                  AVAILABILITY
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Status</span>
                    <Badge className="neon-lime bg-secondary/20">
                      {availability.status}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Next Slot</span>
                    <span className="font-jetbrains text-sm">{availability.nextSlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Response Time</span>
                    <span className="font-jetbrains text-sm neon-cyan">{availability.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Capacity</span>
                    <span className="font-jetbrains text-sm">{availability.capacity}</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Button className="w-full glow-ring-cyan">
                    <Calendar className="h-4 w-4 mr-2" />
                    SCHEDULE CALL
                  </Button>
                  <Button variant="outline" className="w-full glow-ring-lime">
                    <Download className="h-4 w-4 mr-2" />
                    DOWNLOAD RESUME
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="glow-ring-cyan bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-orbitron flex items-center gap-2">
                  <Mail className="h-5 w-5 neon-cyan" />
                  QUICK INQUIRY
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="glow-ring-cyan bg-background/50"
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="glow-ring-cyan bg-background/50"
                      />
                      <Input
                        name="company"
                        placeholder="Company (Optional)"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="glow-ring-cyan bg-background/50"
                      />
                      <Textarea
                        name="message"
                        placeholder="Brief project description..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="glow-ring-cyan bg-background/50 min-h-[100px]"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full glow-ring-lime">
                      SEND MESSAGE
                    </Button>
                  </form>
                ) : (
                  <div className="text-center space-y-4 py-8">
                    <CheckCircle className="h-12 w-12 neon-lime mx-auto animate-pulse-glow" />
                    <h3 className="font-orbitron text-lg neon-lime">MESSAGE SENT!</h3>
                    <p className="text-sm text-muted-foreground">
                      I'll get back to you within 24 hours. Thank you for your interest!
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSubmitted(false)}
                      className="glow-ring-cyan"
                    >
                      SEND ANOTHER
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};