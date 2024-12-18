import React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui';
import { NAVIGATION_ITEMS } from '@/lib/constants';
import { type NavigationItem } from '@/lib/types';

const NavLink = ({ item }: { item: NavigationItem }) => (
  <a 
    href={item.href} 
    className="text-black hover:text-gray-700"
  >
    {item.label}
  </a>
);

const MobileNavLink = ({ item }: { item: NavigationItem }) => (
  <a
    href={item.href}
    className="block px-3 py-2 text-black hover:bg-yellow-500"
  >
    {item.label}
  </a>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-yellow-400 border-b-2 border-black z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-black">x222c</a>
          </div>
          
          <nav className="hidden md:block">
            <div className="flex items-center space-x-4">
              {NAVIGATION_ITEMS.map((item) => (
                <NavLink key={item.href} item={item} />
              ))}
              <Button variant="secondary">Get Started</Button>
            </div>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden border-t-2 border-black bg-yellow-400">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {NAVIGATION_ITEMS.map((item) => (
              <MobileNavLink key={item.href} item={item} />
            ))}
            <Button variant="secondary" className="w-full mt-2">
              Get Started
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;