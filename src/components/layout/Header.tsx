import React from 'react';
import { UtensilsCrossed } from 'lucide-react';
import { Button } from '../../components/ui/button';
import ThemeToggle from '../../components/layout/ThemeToggle';
import { cn } from '../../lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4',
        className
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <UtensilsCrossed className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-xl font-serif font-bold">Gourmet Haven</h1>
            <p className="text-xs text-muted-foreground">Fine Dining Experience</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="link" className="text-foreground">Menu</Button>
            <Button variant="link" className="text-foreground">About</Button>
            <Button variant="link" className="text-foreground">Contact</Button>
          </nav>
          
          <ThemeToggle />
          
          <Button size="sm" variant="default" className="hidden md:inline-flex">
            Reservations
          </Button>
          
          <Button variant="outline" size="icon" className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;