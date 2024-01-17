import Image from "next/image";

interface OwnProps {
  title: string;
  hasMuala: boolean;
}

const RestaurantTitle = ({ title, hasMuala }: OwnProps) => {
  return (
    <div className="flex items-center gap-2">
      {title}
      {hasMuala && (
        <Image src="/muala.png" alt="muala" width={24} height={24} />
      )}
    </div>
  );
};

export default RestaurantTitle;
