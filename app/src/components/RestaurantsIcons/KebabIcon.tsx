import { GiDonerKebab } from "react-icons/gi";
import RestaurantIconContainer from "./RestaurantIcon";

const KebabIcon = () => {
  return (
    <RestaurantIconContainer className="from-pink-900 to-pink-500 ring-[#f9a8d4a8]">
      <GiDonerKebab className="text-2xl text-white" />
    </RestaurantIconContainer>
  );
};

export default KebabIcon;
