import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../../components/ui/badge';
import { Card, CardContent } from '../../components/ui/card';
import { type MenuItem as MenuItemType } from '../../data/menuData';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-md">
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {item.popular && (
            <Badge variant="popular" className="absolute top-2 right-2">
              Popular
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-serif font-semibold text-lg">{item.name}</h3>
            <span className="font-medium text-primary">${item.price.toFixed(2)}</span>
          </div>
          <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
          {item.dietary && item.dietary.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {item.dietary.map((diet) => (
                <Badge key={diet} variant={diet as any}>
                  {diet.charAt(0).toUpperCase() + diet.slice(1)}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MenuItem;