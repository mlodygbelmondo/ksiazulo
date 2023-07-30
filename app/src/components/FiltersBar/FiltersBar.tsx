import SearchBar from "./SearchBar";
import SelectLocation from "./SelectLocation";

const FiltersBar = () => {
  return (
    <div className="sticky top-0 z-10 flex h-14 w-full items-center gap-2 bg-white px-4">
      <SearchBar />
      <SelectLocation />
    </div>
  );
};

export default FiltersBar;
