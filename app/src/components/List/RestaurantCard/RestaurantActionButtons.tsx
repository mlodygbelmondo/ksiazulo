import { TbMapSearch } from "react-icons/tb";
import { AiOutlineYoutube } from "react-icons/ai";
interface OwnProps {
  ytUrl: string;
}
const RestaurantActionButtons = ({ ytUrl }: OwnProps) => {
  const actionButtonStyles = "text-lg text-gray-400";

  const restaurantActionButtons = [
    {
      icon: <AiOutlineYoutube className={actionButtonStyles} />,
      link: ytUrl,
    },
    {
      icon: <TbMapSearch className={actionButtonStyles} />,
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
          className="rounded-full hover:bg-gray-50 hover:ring-6 hover:ring-gray-50"
        >
          {button.icon}
        </a>
      ))}
    </div>
  );
};

export default RestaurantActionButtons;
