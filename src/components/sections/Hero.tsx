import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Button, Card } from '@/components/ui';

const Hero = () => {
  return (
    <div className="relative bg-yellow-400 pt-24">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full border-2 border-black bg-white px-3 py-1">
            <Star className="mr-2 h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium">New Features Released!</span>
          </div>
          
          <Card variant="highlight" className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
              Level Up Your Business
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Join thousands of companies using x222c to transform their operations
            </p>
          </Card>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">Watch Demo</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;