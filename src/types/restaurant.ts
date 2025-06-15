export interface Restaurant {
  id: string;
  name: string;
  logoUrl: string;
  rating: number;
  deliveryFee: number;
  deliveryTime: string;
  distanceKm: number;
  freeDeliveryMinOrder: number | null;
  minOrderValue: number | null;
  status: 'open' | 'closed';
  cuisineType?: string;
}

export interface RestaurantData {
  deliveryAddress: string;
  openRestaurants: Restaurant[];
  closedRestaurants: Restaurant[];
} 