export const filterRestaurantsByCity = (
  restaurants: Restaurant[],
  city: string | string[] | undefined
) => {
  if (!city) return restaurants;

  return restaurants.filter((restaurant) => restaurant.city === city);
};

export const filterRestaurantsBySearch = (
  restaurants: Restaurant[],
  search: string
) => {
  if (!search) return restaurants;

  return restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(search.toLowerCase())
  );
};
