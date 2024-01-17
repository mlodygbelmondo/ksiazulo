import { useRouter } from "next/router";
import { useSelectLocationTextAtom } from "~/atoms/filtersBar";
import { clearSelectedLocation } from "~/helpers/selectLocation";
import { MdOutlineClear } from "react-icons/md";

const ClearSelectedLocation = () => {
  const [, setLocationText] = useSelectLocationTextAtom();

  const router = useRouter();

  const clearLocationText = () => setLocationText(null);

  //TODO: Add React Icons here
  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-colors hover:border-gray-400 hover:bg-gray-50"
      onClick={() => clearSelectedLocation(router, clearLocationText)}
    >
      <MdOutlineClear className="text-lg text-gray-600" />
    </button>
  );
};
export default ClearSelectedLocation;
