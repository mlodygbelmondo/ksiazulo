import Option from "@mui/joy/Option";
import { useRouter } from "next/router";
import { useSelectLocationTextAtom } from "~/atoms/filtersBar";
import { onSelectLocationClick } from "~/helpers/selectLocation";

interface OwnProps {
  lat: number;
  lng: number;
  zoom: number;
  label: string;
}
const SelectLocationOption = ({ lat, lng, zoom, label }: OwnProps) => {
  const [, setLocationText] = useSelectLocationTextAtom();

  const router = useRouter();

  return (
    <Option
      value={label}
      onClick={() =>
        onSelectLocationClick(lat, lng, zoom, label, router, setLocationText)
      }
    >
      {label}
    </Option>
  );
};
export default SelectLocationOption;
