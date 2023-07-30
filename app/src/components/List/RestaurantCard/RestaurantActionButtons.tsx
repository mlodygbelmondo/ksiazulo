import { TbMapSearch } from "react-icons/tb";
import { BsYoutube } from "react-icons/bs";
interface OwnProps {
  ytUrl: string;
}
const RestaurantActionButtons = ({ ytUrl }: OwnProps) => {
  const restaurantActionButtons = [
    {
      icon: <BsYoutube className="text-red-600" />,
      link: ytUrl,
    },
    {
      icon: <TbMapSearch className="text-gray-500" />,
      // TODO: Populate it with correct link
      link: "https://www.google.pl/maps/preview",
    },
  ];

  return (
    <div className="flex gap-3">
      {restaurantActionButtons.map((button, index) => (
        <a
          target="_blank"
          href={button.link}
          key={index}
          className="rounded-full text-[19px] hover:bg-gray-50 hover:ring-7 hover:ring-gray-50"
        >
          {button.icon}
        </a>
      ))}
    </div>
  );
};

export default RestaurantActionButtons;
