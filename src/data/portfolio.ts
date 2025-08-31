import { Project, Badge, Tutorial, CaseStudy, LogEntry } from '@/types';

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'GitOps Fleet for EKS',
    category: ['devops', 'cloud'],
    summary: 'Multi-env GitOps with ArgoCD, progressive delivery, drift detection.',
    stack: ['EKS', 'ArgoCD', 'Kustomize', 'Terraform', 'Prometheus'],
    metrics: [
      { label: 'Lead Time', value: '-38%' },
      { label: 'MTTR', value: '-46%' }
    ],
    year: 2025,
    links: [
      { type: 'repo', url: '#' },
      { type: 'case', url: '#' }
    ],
    featured: true
  },
  {
    id: 'p2',
    title: 'LLM Inference Gateway',
    category: ['ai', 'web', 'advanced'],
    summary: 'Token-aware router with KV cache + spec-compliant tracing.',
    stack: ['FastAPI', 'Redis', 'OpenTelemetry', 'CUDA'],
    metrics: [
      { label: 'Cost/Req', value: '-27%' },
      { label: 'P95 Latency', value: '-31%' }
    ],
    year: 2025,
    links: [{ type: 'repo', url: '#' }]
  },
  {
    id: 'p3',
    title: 'Multi-Cloud IaC Pipeline',
    category: ['devops', 'cloud', 'advanced'],
    summary: 'Cross-cloud infrastructure automation with Terraform and Pulumi.',
    stack: ['Terraform', 'Pulumi', 'AWS', 'GCP', 'Azure', 'GitHub Actions'],
    metrics: [
      { label: 'Deploy Time', value: '-52%' },
      { label: 'Cost Savings', value: '34%' }
    ],
    year: 2024,
    links: [
      { type: 'repo', url: '#' },
      { type: 'demo', url: '#' }
    ],
    featured: true
  },
  {
    id: 'p4',
    title: 'Real-time ML Model Serving',
    category: ['ai', 'cloud'],
    summary: 'Scalable ML inference with auto-scaling and A/B testing.',
    stack: ['TensorFlow Serving', 'Kubernetes', 'Istio', 'Prometheus'],
    metrics: [
      { label: 'Throughput', value: '+156%' },
      { label: 'Model Accuracy', value: '94.7%' }
    ],
    year: 2024,
    links: [{ type: 'demo', url: '#' }]
  },
  {
    id: 'p5',
    title: 'React Dashboard Framework',
    category: ['web'],
    summary: 'Reusable dashboard components with real-time data visualization.',
    stack: ['React', 'TypeScript', 'D3.js', 'WebSocket', 'TailwindCSS'],
    metrics: [
      { label: 'Load Time', value: '<800ms' },
      { label: 'Bundle Size', value: '180KB' }
    ],
    year: 2024,
    links: [
      { type: 'repo', url: '#' },
      { type: 'demo', url: '#' }
    ]
  },
  {
    id: 'p6',
    title: 'Neural Network Optimizer',
    category: ['ai', 'advanced'],
    summary: 'Custom CUDA kernels for accelerated neural network training.',
    stack: ['CUDA', 'PyTorch', 'C++', 'Docker'],
    metrics: [
      { label: 'Training Speed', value: '+245%' },
      { label: 'Memory Usage', value: '-42%' }
    ],
    year: 2023,
    links: [{ type: 'repo', url: '#' }],
    featured: true
  }
];

export const badges: Badge[] = [
  {
    id: 'b1',
    title: 'Pipeline Sorcerer',
    rarity: 'epic',
    category: 'skill',
    description: 'Built zero-downtime blue/green with canaries.',
    earnedAt: '2024-12-15'
  },
  {
    id: 'b2',
    title: 'GPU Whisperer',
    rarity: 'rare',
    category: 'skill',
    description: 'Optimized CUDA kernels for inference.',
    earnedAt: '2024-11-20'
  },
  {
    id: 'b3',
    title: 'Cloud Tactician',
    rarity: 'legendary',
    category: 'award',
    description: 'Shipped multi-region failover under SLO.',
    earnedAt: '2024-10-05'
  },
  {
    id: 'b4',
    title: 'Kubernetes Master',
    rarity: 'epic',
    category: 'skill',
    description: 'Orchestrated 500+ microservices in production.',
    earnedAt: '2024-09-12'
  },
  {
    id: 'b5',
    title: 'AI Innovator',
    rarity: 'legendary',
    category: 'award',
    description: 'Published research on distributed ML training.',
    earnedAt: '2024-08-30'
  },
  {
    id: 'b6',
    title: 'Security Guardian',
    rarity: 'rare',
    category: 'skill',
    description: 'Implemented zero-trust architecture.',
    earnedAt: '2024-07-18'
  }
];

export const tutorials: Tutorial[] = [
  {
    slug: 'kubernetes-gitops',
    title: 'GitOps with Kubernetes & ArgoCD',
    level: 'intermediate',
    minutes: 45,
    tags: ['kubernetes', 'gitops', 'argocd', 'devops'],
    summary: 'Learn how to implement GitOps workflows with ArgoCD for Kubernetes deployments.'
  },
  {
    slug: 'ml-model-deployment',
    title: 'ML Model Deployment on Kubernetes',
    level: 'advanced',
    minutes: 60,
    tags: ['ml', 'kubernetes', 'tensorflow', 'serving'],
    summary: 'Deploy and scale machine learning models using Kubernetes and TensorFlow Serving.'
  },
  {
    slug: 'terraform-multi-cloud',
    title: 'Multi-Cloud Infrastructure with Terraform',
    level: 'intermediate',
    minutes: 35,
    tags: ['terraform', 'aws', 'gcp', 'azure', 'iac'],
    summary: 'Build infrastructure across multiple cloud providers using Terraform modules.'
  },
  {
    slug: 'react-performance',
    title: 'React Performance Optimization',
    level: 'beginner',
    minutes: 25,
    tags: ['react', 'performance', 'optimization', 'frontend'],
    summary: 'Optimize React applications for better performance and user experience.'
  }
];

export const caseStudies: CaseStudy[] = [
  {
    slug: 'scaling-ml-infrastructure',
    title: 'Scaling ML Infrastructure for 10M+ Daily Predictions',
    problem: 'Legacy ML inference system couldn\'t handle growing traffic, causing 30s+ latencies and frequent outages.',
    approach: 'Designed horizontally scalable inference architecture with auto-scaling, caching, and circuit breakers.',
    architecture: 'Kubernetes-native solution with TensorFlow Serving, Redis cache layer, and Istio service mesh for traffic management.',
    outcome: 'Reduced P95 latency from 30s to 200ms, achieved 99.9% uptime, and decreased infrastructure costs by 40%.',
    links: [
      { label: 'Technical Deep Dive', url: '#' },
      { label: 'Architecture Diagram', url: '#' }
    ],
    year: 2024
  },
  {
    slug: 'zero-downtime-migration',
    title: 'Zero-Downtime Migration to Kubernetes',
    problem: 'Monolithic application running on VMs needed migration to Kubernetes without service interruption.',
    approach: 'Implemented strangler fig pattern with gradual traffic shifting and comprehensive monitoring.',
    architecture: 'Blue-green deployment strategy with feature flags and automated rollback mechanisms.',
    outcome: 'Migrated 50+ services with zero downtime, reduced deployment time from 4 hours to 15 minutes.',
    links: [
      { label: 'Migration Strategy', url: '#' },
      { label: 'Lessons Learned', url: '#' }
    ],
    year: 2023
  }
];

export const systemLogs: LogEntry[] = [
  {
    id: 'log1',
    ts: new Date().toISOString(),
    level: 'success',
    icon: 'CheckCircle',
    message: 'Portfolio system initialized successfully',
  },
  {
    id: 'log2',
    ts: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
    level: 'info',
    icon: 'GitBranch',
    message: 'New project deployment completed',
    link: '#'
  },
  {
    id: 'log3',
    ts: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    level: 'info',
    icon: 'Users',
    message: 'Visitor count updated: 1,247 total visits',
  },
  {
    id: 'log4',
    ts: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    level: 'success',
    icon: 'Award',
    message: 'New achievement unlocked: Cloud Tactician',
  },
  {
    id: 'log5',
    ts: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    level: 'info',
    icon: 'Activity',
    message: 'System performance optimal: 99.9% uptime',
  }
];