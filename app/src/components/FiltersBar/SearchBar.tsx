import Input from "@mui/joy/Input";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  // TODO: Make this component controlled

  return (
    <Input
      placeholder="Szukaj"
      sx={{
        "--Input-focusedThickness": "1.5px",
        "--Input-focusedHighlight": "#7C828D",
      }}
      startDecorator={<CiSearch />}
    />
  );
};

export default SearchBar;
