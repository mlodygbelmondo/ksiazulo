import { useRouter } from "next/router";
import RestaurantCard from "./RestaurantCard/RestaurantCard";
import ListHeader from "./ListHeader";
import {
  filterRestaurantsByCity,
  filterRestaurantsBySearch,
} from "~/helpers/list";
import NoRestaurantsPassingCriteria from "./NoRestaurantsPassingCriteria";
import { useSearchBarAtom } from "~/atoms/filtersBar";

const List = ({ restaurants }: RestaurantProps) => {
  const [searchBarValue] = useSearchBarAtom();
  const { query } = useRouter();
  const { city } = query;

  const restaurantsFilteredByCity = filterRestaurantsByCity(restaurants, city);
  const filteredRestaurants = filterRestaurantsBySearch(
    restaurantsFilteredByCity,
    searchBarValue
  );

  return (
    <div className="flex h-full w-7/12 flex-col gap-2 bg-gray-100 p-2">
      {city && <ListHeader city={city as string} />}
      {filteredRestaurants.length > 0 ? (
        filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))
      ) : (
        <NoRestaurantsPassingCriteria />
      )}
    </div>
  );
};

export default List;
