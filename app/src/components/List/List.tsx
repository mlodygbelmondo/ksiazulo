import RestaurantCard from "./RestaurantCard/RestaurantCard";

const List = ({ restaurants }: RestaurantProps) => {
  return (
    <div className="flex h-full w-7/12 flex-col gap-2 bg-gray-100 p-2">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default List;
