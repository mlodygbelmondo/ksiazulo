import AppSubtitle from "./AppSubtitle";
import AppTitle from "./AppTitle";
import HamburgerMenu from "./HamburgerMenu";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 flex h-14 w-full items-center justify-between border-b border-b-gray-200 bg-white">
      <div className="flex h-full items-center">
        <AppTitle />
        <AppSubtitle />
      </div>
      <div className="flex h-full items-center">
        {/* <Navigation /> */}
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
