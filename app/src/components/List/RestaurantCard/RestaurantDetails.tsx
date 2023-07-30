import { LiaCitySolid } from "react-icons/lia";
import { IoRestaurantOutline } from "react-icons/io5";
const RestaurantDetails = () => {
  // TODO: use real data here
  return (
    <div className="flex items-center gap-1">
      <LiaCitySolid />
      Władysławowo,
      <IoRestaurantOutline className="ml-0.5" />
      Kebab
    </div>
  );
};

export default RestaurantDetails;
