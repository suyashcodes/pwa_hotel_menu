import React from 'react';
import { UtensilsCrossed, Instagram, Facebook, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/40 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <UtensilsCrossed className="h-6 w-6 text-primary" />
              <span className="font-serif font-bold text-xl">Gourmet Haven</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Exquisite dining in a warm and inviting atmosphere with seasonal ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="font-medium text-lg mb-4">Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
          
          <div className="flex-1">
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <address className="not-italic space-y-2 text-muted-foreground">
              <p>123 Gourmet Street</p>
              <p>Flavor City, FC 12345</p>
              <p className="mt-4">(555) 123-4567</p>
              <p className="text-primary hover:underline">
                <a href="mailto:info@gourmethaven.com">info@gourmethaven.com</a>
              </p>
            </address>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Gourmet Haven. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;