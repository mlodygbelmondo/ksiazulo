import { FiMenu } from "react-icons/fi";

const HamburgerMenu = () => {
  return (
    <div className="flex h-14 w-14 items-center justify-center">
      <FiMenu className="cursor-pointer text-2xl text-gray-800" />
    </div>
  );
};

export default HamburgerMenu;
