import { type NavigationItem, type Feature } from './types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const FEATURES: Feature[] = [
  {
    name: 'Lightning Fast',
    description: 'Experience blazing-fast performance with our optimized infrastructure.',
    icon: 'Zap',
  },
  {
    name: 'Enterprise Security',
    description: 'Bank-grade security to keep your data safe and compliant.',
    icon: 'Shield',
  },
  {
    name: 'Advanced Analytics',
    description: 'Gain deep insights with our powerful analytics tools.',
    icon: 'BarChart',
  },
  {
    name: 'Team Collaboration',
    description: 'Work seamlessly with your team in real-time.',
    icon: 'Users',
  },
];