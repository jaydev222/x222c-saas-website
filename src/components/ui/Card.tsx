import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'highlight';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg border-2 border-black bg-white p-6',
          {
            'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]': variant === 'default',
            'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-yellow-400': variant === 'highlight',
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;