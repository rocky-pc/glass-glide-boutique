export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  images: string[];
  description: string;
  features: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: 'New' | 'Sale' | 'Limited';
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299,
    originalPrice: 399,
    category: 'Audio',
    image: '/api/placeholder/400/400',
    images: ['/api/placeholder/400/400', '/api/placeholder/400/300', '/api/placeholder/300/400'],
    description: 'Experience pure sound with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.',
    features: ['Active Noise Cancellation', '30h Battery Life', 'Premium Materials', 'Wireless Charging'],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    badge: 'Sale'
  },
  {
    id: '2',
    name: 'Luxury Smartwatch',
    price: 599,
    category: 'Wearables',
    image: '/api/placeholder/400/400',
    images: ['/api/placeholder/400/400', '/api/placeholder/400/300', '/api/placeholder/300/400'],
    description: 'A sophisticated smartwatch that combines cutting-edge technology with timeless design.',
    features: ['Health Monitoring', 'GPS Tracking', 'Water Resistant', '7-day Battery'],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    badge: 'New'
  },
  {
    id: '3',
    name: 'Designer Sunglasses',
    price: 249,
    category: 'Fashion',
    image: '/api/placeholder/400/400',
    images: ['/api/placeholder/400/400', '/api/placeholder/400/300', '/api/placeholder/300/400'],
    description: 'Handcrafted designer sunglasses with polarized lenses and titanium frames.',
    features: ['Polarized Lenses', 'Titanium Frame', 'UV Protection', 'Anti-Scratch Coating'],
    rating: 4.7,
    reviews: 156,
    inStock: true
  },
  {
    id: '4',
    name: 'Minimalist Backpack',
    price: 149,
    category: 'Bags',
    image: '/api/placeholder/400/400',
    images: ['/api/placeholder/400/400', '/api/placeholder/400/300', '/api/placeholder/300/400'],
    description: 'A sleek, minimalist backpack designed for the modern professional.',
    features: ['Water Resistant', 'Laptop Compartment', 'Ergonomic Design', 'Premium Materials'],
    rating: 4.6,
    reviews: 203,
    inStock: true
  },
  {
    id: '5',
    name: 'Artisan Coffee Set',
    price: 89,
    originalPrice: 129,
    category: 'Home',
    image: '/api/placeholder/400/400',
    images: ['/api/placeholder/400/400', '/api/placeholder/400/300', '/api/placeholder/300/400'],
    description: 'Professional-grade coffee brewing set for the perfect cup every time.',
    features: ['Ceramic Dripper', 'Precision Scale', 'Temperature Control', 'Premium Filters'],
    rating: 4.8,
    reviews: 91,
    inStock: false,
    badge: 'Limited'
  },
  {
    id: '6',
    name: 'Wireless Speaker',
    price: 199,
    category: 'Audio',
    image: '/api/placeholder/400/400',
    images: ['/api/placeholder/400/400', '/api/placeholder/400/300', '/api/placeholder/300/400'],
    description: 'Portable wireless speaker with 360-degree sound and waterproof design.',
    features: ['360° Sound', 'Waterproof', '20h Battery', 'Voice Assistant'],
    rating: 4.5,
    reviews: 167,
    inStock: true
  }
];

export const categories = [
  { name: 'All', count: products.length },
  { name: 'Audio', count: products.filter(p => p.category === 'Audio').length },
  { name: 'Wearables', count: products.filter(p => p.category === 'Wearables').length },
  { name: 'Fashion', count: products.filter(p => p.category === 'Fashion').length },
  { name: 'Bags', count: products.filter(p => p.category === 'Bags').length },
  { name: 'Home', count: products.filter(p => p.category === 'Home').length }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Design Director',
    content: 'The quality and attention to detail in every product is exceptional. This is my go-to store for premium items.',
    rating: 5,
    avatar: '/api/placeholder/60/60'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Tech Entrepreneur',
    content: 'Outstanding customer service and beautiful products. The shopping experience is seamless and enjoyable.',
    rating: 5,
    avatar: '/api/placeholder/60/60'
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Creative Professional',
    content: 'Every purchase feels special. The packaging, quality, and design philosophy really resonates with me.',
    rating: 5,
    avatar: '/api/placeholder/60/60'
  }
];