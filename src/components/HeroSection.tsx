import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToMenu = () => {
    const menuElement = document.getElementById('menu-section');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-black"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'brightness(0.4)',
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            A Culinary Journey Like No Other
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8">
            Experience the finest flavors with our meticulously crafted menu
            using locally sourced, seasonal ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToMenu}>
              View Our Menu
            </Button>
            <Button size="lg" variant="outline" className="bg-background/10 hover:bg-background/20 text-white border-white">
              Make a Reservation
            </Button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-white"
            onClick={scrollToMenu}
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;