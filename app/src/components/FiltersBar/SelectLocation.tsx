import React from "react";
import Select from "@mui/joy/Select";
import { MdLocationOn } from "react-icons/md";
import { SELECT_LOCATION_CITIES } from "~/utils/consts/selectLocationCities";
import SelectLocationOption from "./SelectLocationOption";
import { useSelectLocationTextAtom } from "~/atoms/filtersBar";

export default function SelectLocation() {
  const [locationText] = useSelectLocationTextAtom();

  // TODO: Make this component controlled
  return (
    <Select
      placeholder="Miasto"
      startDecorator={<MdLocationOn />}
      sx={{ width: 180, fontWeight: 400 }}
      value={locationText}
    >
      {SELECT_LOCATION_CITIES.map((city) => (
        <SelectLocationOption
          key={city.label}
          lat={city.lat}
          lng={city.lng}
          zoom={city.zoom}
          label={city.label}
        />
      ))}
    </Select>
  );
}
