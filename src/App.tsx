import { useState } from 'react'
import reactLogo from './assets/react.svg'
import appLogo from '/favicon.svg'
import PWABadge from './PWABadge.tsx'
import './App.css'

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './components/layout/Footer';
import { Toaster } from './components/ui/toaster';
import Header from './components/layout/Header.tsx'
import HeroSection from './components/HeroSection.tsx'
import MenuList from './components/menu/MenuList.tsx'

function App() {
  // Change document title
  useEffect(() => {
    document.title = 'Gourmet Haven | Fine Dining Experience';
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <HeroSection />
          
          <motion.section 
            id="menu-section"
            className="py-24 px-4 bg-background relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Menu</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore our carefully curated menu featuring the finest ingredients, 
                  expertly prepared to provide an unforgettable dining experience.
                </p>
              </div>
              
              <MenuList />
            </div>
          </motion.section>
          
          <motion.section
            className="py-20 px-4 bg-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="container mx-auto text-center max-w-3xl">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Join Us</h2>
              <p className="text-muted-foreground mb-8">
                Experience our exceptional cuisine in our warm and inviting atmosphere.
                We look forward to serving you and creating memorable dining moments.
              </p>
              <div>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white transition-colors bg-primary rounded-md shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Make a Reservation
                </a>
              </div>
            </div>
          </motion.section>
        </main>
        
        <Footer />
        <Toaster />
      </div>
    </AnimatePresence>
  );
}

export default App;