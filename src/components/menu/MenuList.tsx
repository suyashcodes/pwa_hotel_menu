import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Input } from "../../components/ui/input";
import { categories, menuItems, type MenuItem as MenuItemType } from '../../data/menuData';
import MenuItem from '../../components/menu/MenuItem';
import { Search } from 'lucide-react';

const MenuList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState<MenuItemType[]>([]);

  useEffect(() => {
    const filtered = menuItems.filter(item => {
      // Filter by search term
      const matchesSearch = searchTerm === '' || 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Filter by category
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredItems(filtered);
  }, [searchTerm, activeCategory]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex items-center mb-8 relative">
        <Search className="w-5 h-5 absolute left-3 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search our menu..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Tabs defaultValue={categories[0].id} onValueChange={setActiveCategory} className="w-full">
        <TabsList className="mb-8 w-full justify-start overflow-x-auto whitespace-nowrap scrollbar-none p-0 sm:justify-center">
          <TabsTrigger value="all" className="px-4 py-2">
            All Items
          </TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="px-4 py-2">
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No items found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter</p>
            </div>
          )}
        </TabsContent>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map(item => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium">No items found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default MenuList;