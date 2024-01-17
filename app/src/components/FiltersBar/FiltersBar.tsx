import { useRouter } from "next/router";
import SearchBar from "./SearchBar";
import SelectLocation from "./SelectLocation";
import ClearSelectedLocation from "./ClearSelectedLocation";

const FiltersBar = () => {
  const { query } = useRouter();
  const { city: isCitySelected } = query;

  return (
    <div className="sticky top-0 z-10 flex h-14 w-full items-center gap-2 bg-white px-4">
      <SearchBar />
      <SelectLocation />
      {isCitySelected && <ClearSelectedLocation />}
    </div>
  );
};

export default FiltersBar;
