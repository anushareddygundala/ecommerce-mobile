
export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
};

const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15',
    price: 59999,
    category: 'Mobiles',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500',
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24',
    price: 74999,
    category: 'Mobiles',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500',
  },
  {
    id: '3',
    name: 'MacBook Air',
    price: 99999,
    category: 'Laptops',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
  },
  {
    id: '4',
    name: 'HP Laptop',
    price: 54999,
    category: 'Laptops',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500',
  },
  {
    id: '5',
    name: 'Sony Headphones',
    price: 12999,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
  },
  {
    id: '6',
    name: 'Smart Watch',
    price: 4999,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
  },
  {
    id: '7',
    name: 'Wireless Speaker',
    price: 3499,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
  },
  {
    id: '8',
    name: 'Camera',
    price: 45999,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500',
  },
];

export default products;
