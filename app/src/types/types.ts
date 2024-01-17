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

type Category = {
  id: number;
  name: string;
};

type City = {
  id: number;
  name: string;
};

type Restaurant = {
  id: string;
  name: string;
  rating: number;
  latitude: number;
  longitude: number;
  category: string;
  city: string;
  ytUrl: string;
  hasMuala: boolean;
};

interface RestaurantProps {
  restaurants: Restaurant[];
}
