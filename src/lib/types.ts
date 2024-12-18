import { type LucideIcon } from 'lucide-react';

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Feature {
  name: string;
  description: string;
  icon: keyof typeof import('lucide-react');
}