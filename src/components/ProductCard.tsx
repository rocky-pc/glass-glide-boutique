import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star, Eye } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className = '' }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!product.inStock) {
      toast({
        title: "Out of Stock",
        description: "This item is currently unavailable.",
        variant: "destructive",
      });
      return;
    }

    addItem(product);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
    
    toast({
      title: isLiked ? "Removed from Wishlist" : "Added to Wishlist",
      description: `${product.name} ${isLiked ? 'removed from' : 'added to'} your wishlist.`,
    });
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className={`block ${className}`}
    >
      <div
        className="product-card group relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden rounded-xl mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="product-image w-full h-full object-cover"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.badge && (
              <Badge 
                variant={product.badge === 'Sale' ? 'destructive' : 'default'}
                className="glass text-xs font-medium"
              >
                {product.badge}
              </Badge>
            )}
            {!product.inStock && (
              <Badge variant="secondary" className="glass text-xs">
                Out of Stock
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${
            isHovered ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <Button
              variant="ghost"
              size="sm"
              className="glass-button p-2 hover-scale"
              onClick={handleLike}
            >
              <Heart 
                className={`h-4 w-4 transition-colors ${
                  isLiked ? 'fill-red-500 text-red-500' : ''
                }`} 
              />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="glass-button p-2 hover-scale"
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>

          {/* Add to Cart Overlay */}
          <div className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}>
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full glass-button bg-white/20 hover:bg-white/30 text-white border-white/20"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{product.category}</span>
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-muted-foreground">
                {product.rating} ({product.reviews})
              </span>
            </div>
          </div>
          
          <h3 className="font-playfair font-medium text-lg group-hover:text-primary transition-colors duration-200">
            {product.name}
          </h3>
          
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-lg">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;