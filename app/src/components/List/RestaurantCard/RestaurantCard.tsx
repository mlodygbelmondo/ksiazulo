import { Card } from "@mui/joy";
import RestaurantImage from "./RestaurantImage";
import RestaurantTitle from "./RestaurantTitle";
import RestaurantRating from "./RestaurantRating";
import RestaurantDetails from "./RestaurantDetails";
import RestaurantActionButtons from "./RestaurantActionButtons";

interface OwnProps {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: OwnProps) => {
  return (
    <Card variant="outlined" className="flex w-full flex-row">
      <RestaurantImage />
      <div className="flex w-[calc(100%-160px)] flex-col justify-between font-semibold text-indigo-950">
        <div className="flex w-full justify-between">
          <RestaurantTitle title={restaurant.name} />
          <RestaurantRating rating={restaurant.rating} />
        </div>
        <div className="flex w-full items-end justify-between text-sm font-normal text-gray-400">
          <RestaurantDetails
            city={restaurant.city}
            category={restaurant.category}
          />
          <RestaurantActionButtons ytUrl={restaurant.ytUrl} />
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
