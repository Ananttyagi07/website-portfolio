import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  User, 
  MapPin, 
  Mail, 
  Calendar,
  Award,
  Terminal,
  Code,
  Brain,
  Cloud,
  Database,
  GitBranch
} from 'lucide-react';

export const AboutSection = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'Welcome to Neural Terminal v2.0.1',
    'Type "help" for available commands'
  ]);

  const skills = {
    'AIOps': [
      'TensorFlow', 'PyTorch', 'Scikit-learn', 'MLflow', 'Kubeflow',
      'Prometheus', 'Grafana', 'ELK Stack', 'Splunk', 'Dynatrace'
    ],
    'DevOps': [
      'Kubernetes', 'Docker', 'Terraform', 'ArgoCD', 'Jenkins',
      'GitLab CI', 'GitHub Actions', 'Ansible', 'Helm', 'Istio'
    ],
    'Cloud': [
      'AWS', 'GCP', 'Azure', 'CloudFormation', 'Pulumi',
      'Lambda', 'Cloud Run', 'EKS', 'GKE', 'AKS'
    ],
    'Languages': [
      'Python', 'Go', 'TypeScript', 'Bash', 'SQL',
      'JavaScript', 'Java', 'C++', 'YAML', 'HCL'
    ]
  };

  const certifications = [
    { name: 'AWS Solutions Architect Professional', issuer: 'Amazon Web Services', year: '2024' },
    { name: 'Certified Kubernetes Administrator', issuer: 'CNCF', year: '2024' },
    { name: 'Google Cloud ML Engineer', issuer: 'Google Cloud', year: '2023' },
    { name: 'HashiCorp Terraform Associate', issuer: 'HashiCorp', year: '2023' }
  ];

  const handleTerminalCommand = (command: string) => {
    const newHistory = [...terminalHistory, `> ${command}`];
    
    switch (command.toLowerCase()) {
      case 'help':
        newHistory.push('Available commands: about, skills, contact, certifications, clear, easter-egg');
        break;
      case 'about':
        newHistory.push('3rd Year BTech Graduate with 3 years experience');
        newHistory.push('Specializing in AIOps and DevOps practices');
        break;
      case 'skills':
        newHistory.push('Core competencies:');
        newHistory.push('• Machine Learning & AI Systems');
        newHistory.push('• Cloud Infrastructure & DevOps');
        newHistory.push('• Kubernetes & Containerization');
        newHistory.push('• Infrastructure as Code');
        break;
      case 'contact':
        newHistory.push('Email: tyagiaadi368@gmail');
        newHistory.push('Location: Ghaziabad, UP, India');
        newHistory.push('Domain: AIOps');
        break;
      case 'certifications':
        newHistory.push('Professional Certifications:');
        certifications.forEach(cert => {
          newHistory.push(`• ${cert.name} (${cert.year})`);
        });
        break;
      case 'clear':
        setTerminalHistory(['Terminal cleared']);
        setTerminalInput('');
        return;
      case 'easter-egg':
        newHistory.push('🎉 You found the easter egg!');
        newHistory.push('Fun fact: This portfolio generates 42 terabytes of awesome per second!');
        break;
      default:
        newHistory.push(`Command not found: ${command}`);
        newHistory.push('Type "help" for available commands');
    }
    
    setTerminalHistory(newHistory);
    setTerminalInput('');
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-5xl md:text-6xl font-orbitron font-bold neon-lime">
            SYSTEM PROFILE
          </h1>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Architecting the future where artificial intelligence meets infrastructure excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <Card className="lg:col-span-1 glow-ring-cyan bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-orbitron flex items-center gap-2">
                <User className="h-5 w-5 neon-cyan" />
                PERSONAL DATA
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="font-jetbrains">Anant Tyagi</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="h-4 w-4 text-muted-foreground" />
                  <span className="font-jetbrains">pursuing B.Tech degree </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="font-jetbrains">Ghaziabad, UP, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="font-jetbrains">3 Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="font-jetbrains text-sm">tyagiaadi368@gmail</span>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h4 className="font-orbitron text-sm neon-lime">SPECIALIZATIONS</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="gap-1">
                    <Brain className="h-3 w-3" />
                    AIOps
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <Cloud className="h-3 w-3" />
                    Cloud
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <Database className="h-3 w-3" />
                    DevOps
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <Terminal className="h-3 w-3" />
                    Automation
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills Matrix */}
          <Card className="lg:col-span-2 glow-ring-lime bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-orbitron flex items-center gap-2">
                <Brain className="h-5 w-5 neon-lime" />
                SKILLS MATRIX
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="space-y-3">
                    <h4 className="font-orbitron text-sm neon-cyan">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map(skill => (
                        <Badge key={skill} variant="outline" className="hologram">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="lg:col-span-2 glow-ring-magenta bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-orbitron flex items-center gap-2">
                <Award className="h-5 w-5 neon-magenta" />
                CERTIFICATIONS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert.name}
                    className="p-4 rounded-lg border border-border/50 hologram animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h4 className="font-jetbrains font-medium">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <Badge variant="secondary" className="mt-2 text-xs">
                      {cert.year}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Terminal */}
          <Card className="lg:col-span-1 glow-ring-cyan bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <Button
                variant="ghost"
                onClick={() => setTerminalOpen(!terminalOpen)}
                className="w-full justify-start font-orbitron"
              >
                <Terminal className="h-5 w-5 neon-cyan mr-2" />
                NEURAL TERMINAL
              </Button>
            </CardHeader>
            {terminalOpen && (
              <CardContent>
                <div className="bg-muted/20 rounded-lg p-4 font-jetbrains text-sm">
                  <div className="space-y-1 mb-3 max-h-48 overflow-y-auto">
                    {terminalHistory.map((line, index) => (
                      <div key={index} className="text-muted-foreground">
                        {line}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary mr-2">$</span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && terminalInput.trim()) {
                          handleTerminalCommand(terminalInput.trim());
                        }
                      }}
                      className="flex-1 bg-transparent border-none outline-none text-foreground"
                      placeholder="Type a command..."
                    />
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};