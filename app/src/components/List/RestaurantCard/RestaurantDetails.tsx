import { LiaCitySolid } from "react-icons/lia";
import { IoRestaurantOutline } from "react-icons/io5";

interface OwnProps {
  city: string;
  category: string;
}

const RestaurantDetails = ({ city, category }: OwnProps) => {
  // TODO: use real data here
  return (
    <div className="flex items-center gap-1">
      <LiaCitySolid />
      {city},
      <IoRestaurantOutline className="ml-0.5" />
      {category}
    </div>
  );
};

export default RestaurantDetails;
