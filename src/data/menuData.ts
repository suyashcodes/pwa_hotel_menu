export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular: boolean;
  dietary?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'appetizers',
    name: 'Appetizers',
    description: 'Start your meal with our delicious appetizers'
  },
  {
    id: 'main-courses',
    name: 'Main Courses',
    description: 'Enjoy our chef\'s special main courses'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Finish your meal with something sweet'
  },
  {
    id: 'drinks',
    name: 'Drinks',
    description: 'Refresh yourself with our selection of beverages'
  }
];

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Bruschetta',
    description: 'Grilled bread rubbed with garlic and topped with olive oil, salt, tomato, and basil',
    price: 8.99,
    image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'appetizers',
    popular: true,
    dietary: ['vegetarian']
  },
  {
    id: '2',
    name: 'Caprese Salad',
    description: 'Fresh mozzarella, tomatoes, and sweet basil with a light drizzle of olive oil and balsamic glaze',
    price: 10.99,
    image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'appetizers',
    popular: false,
    dietary: ['vegetarian', 'gluten-free']
  },
  {
    id: '3',
    name: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon fillet grilled to perfection, served with seasonal vegetables and lemon butter sauce',
    price: 24.99,
    image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'main-courses',
    popular: true,
    dietary: ['gluten-free']
  },
  {
    id: '4',
    name: 'Beef Tenderloin',
    description: 'Prime cut beef tenderloin cooked to your preference, served with mashed potatoes and red wine reduction',
    price: 29.99,
    image: 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'main-courses',
    popular: true
  },
  {
    id: '5',
    name: 'Mushroom Risotto',
    description: 'Creamy Arborio rice cooked with mixed wild mushrooms, white wine, and Parmesan cheese',
    price: 18.99,
    image: 'https://images.pexels.com/photos/15121666/pexels-photo-15121666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'main-courses',
    popular: false,
    dietary: ['vegetarian']
  },
  {
    id: '6',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten center, served with vanilla ice cream',
    price: 9.99,
    image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'desserts',
    popular: true,
    dietary: ['vegetarian']
  },
  {
    id: '7',
    name: 'Tiramisu',
    description: 'Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream',
    price: 8.99,
    image: 'https://images.pexels.com/photos/6824443/pexels-photo-6824443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'desserts',
    popular: false,
    dietary: ['vegetarian']
  },
  {
    id: '8',
    name: 'Fresh Fruit Platter',
    description: 'Selection of seasonal fruits',
    price: 7.99,
    image: 'https://images.pexels.com/photos/1132040/pexels-photo-1132040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'desserts',
    popular: false,
    dietary: ['vegetarian', 'vegan', 'gluten-free']
  },
  {
    id: '9',
    name: 'Signature Cocktail',
    description: 'House special cocktail with gin, elderflower liqueur, cucumber, and lime',
    price: 12.99,
    image: 'https://images.pexels.com/photos/2795026/pexels-photo-2795026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'drinks',
    popular: true
  },
  {
    id: '10',
    name: 'Red Wine',
    description: 'Glass of premium red wine from our selected wineries',
    price: 9.99,
    image: 'https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'drinks',
    popular: false
  },
  {
    id: '11',
    name: 'Sparkling Water',
    description: 'Bottle of premium sparkling mineral water',
    price: 3.99,
    image: 'https://images.pexels.com/photos/1292862/pexels-photo-1292862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'drinks',
    popular: false,
    dietary: ['vegetarian', 'vegan', 'gluten-free']
  },
  {
    id: '12',
    name: 'Calamari',
    description: 'Crispy fried squid rings served with garlic aioli and marinara sauce',
    price: 12.99,
    image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'appetizers',
    popular: true
  }
];