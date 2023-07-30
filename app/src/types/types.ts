/* eslint-disable @typescript-eslint/no-unused-vars */
type RestaurantNoPosition = {
  id: string;
  name: string;
  rating: number;
  positionId: number;
  ytUrl: string;
};

type RestaurantsData = {
  content: RestaurantNoPosition[];
};

type Position = {
  id: number;
  latitude: number;
  longitude: number;
};

type Restaurant = {
  id: string;
  name: string;
  rating: number;
  latitude: number;
  longitude: number;
  ytUrl: string;
};

interface RestaurantProps {
  restaurants: Restaurant[];
}
