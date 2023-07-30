import * as React from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { MdLocationOn } from "react-icons/md";

export default function SelectLocation() {
  // TODO: Make this component controlled
  return (
    <Select
      placeholder="Miasto"
      startDecorator={<MdLocationOn />}
      sx={{ width: 180, fontWeight: 400 }}
    >
      {/* TODO: Populate this data from an endpoint or smthn */}
      <Option value="Będzin">Będzin</Option>
      <Option value="Sulęcin">Sulęcin</Option>
      <Option value="Przybynów">Przybynów</Option>
      <Option value="Lubawa">Lubawa</Option>
    </Select>
  );
}
