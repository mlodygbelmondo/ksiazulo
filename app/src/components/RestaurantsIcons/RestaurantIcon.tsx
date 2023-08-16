import { twMerge } from "tailwind-merge";

interface OwnProps {
  children: React.ReactNode;
  className: string;
}

const RestaurantIconContainer = ({ children, className }: OwnProps) => {
  return (
    <div
      className={twMerge(
        "flex h-8 w-8 -translate-x-4 -translate-y-4 cursor-pointer items-center justify-center rounded-full bg-gradient-to-tr ring-4 transition-all duration-300 hover:scale-125",
        className
      )}
    >
      {children}
    </div>
  );
};

export default RestaurantIconContainer;
