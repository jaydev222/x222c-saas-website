import React from 'react';
import * as Icons from 'lucide-react';
import { Card } from '@/components/ui';
import { FEATURES } from '@/lib/constants';
import { type Feature } from '@/lib/types';

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const Icon = Icons[feature.icon as keyof typeof Icons];
  return (
    <Card>
      <Icon className="h-8 w-8 text-yellow-400" />
      <h3 className="mt-4 font-semibold text-black">{feature.name}</h3>
      <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
    </Card>
  );
};

const Features = () => {
  return (
    <div id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-black">Power-Packed Features</h2>
          <p className="mt-4 text-gray-600">Everything you need to succeed</p>
        </div>
        
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.name} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;