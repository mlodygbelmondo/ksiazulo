import { FiMenu } from "react-icons/fi";

const HamburgerMenu = () => {
  return (
    <div className="flex h-14 w-14 items-center justify-center">
      <button className="transition-all duration-500 hover:rotate-180 hover:scale-125">
        <FiMenu className=" text-2xl text-gray-800" />
      </button>
    </div>
  );
};

export default HamburgerMenu;
