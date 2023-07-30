import { GiDonerKebab } from "react-icons/gi";

const KebabIcon = () => {
  return (
    <div className="flex h-8 w-8 -translate-x-4 -translate-y-4 cursor-pointer items-center justify-center rounded-full bg-gradient-to-tr from-pink-900 to-pink-500 ring-4 ring-[#f9a8d4a8] transition-all hover:ring-[#f485c2b6]">
      <GiDonerKebab className="text-2xl text-white" />
    </div>
  );
};

export default KebabIcon;
