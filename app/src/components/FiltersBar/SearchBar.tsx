import Input from "@mui/joy/Input";
import { CiSearch } from "react-icons/ci";
import { useSearchBarAtom } from "~/atoms/filtersBar";

const SearchBar = () => {
  // TODO: Make this component controlled
  const [inputValue, setInputValue] = useSearchBarAtom();

  return (
    // <Input
    //   placeholder="Szukaj"
    //   sx={{
    //     "--Input-focusedThickness": "1.5px",
    //     "--Input-focusedHighlight": "#7C828D",
    //   }}
    //   value={inputValue}
    //   onChange={(e) => setInputValue(e.target.value)}
    //   startDecorator={<CiSearch />}
    // />
    <div className="relative">
      <input
        type="text"
        placeholder="Szukaj"
        value={inputValue}
        className="w-40 rounded-full bg-gray-100 px-4 py-2 pl-[36px] outline-none transition-all duration-300 hover:bg-gray-200 hover:placeholder:text-gray-400 focus:w-[600px] focus:border-transparent focus:shadow-sm focus:shadow-gray-300 hover:focus:bg-gray-100"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <CiSearch className="absolute bottom-0 left-3 top-0 my-auto text-gray-600" />
    </div>
  );
};

export default SearchBar;
