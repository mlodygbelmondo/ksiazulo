import KebabIcon from "../RestaurantsIcons/KebabIcon";

interface OwnProps {
  lat: number;
  lng: number;
  onClick: (lat: number, lng: number) => void;
}
const Marker = ({ lat, lng, onClick }: OwnProps) => {
  return (
    <div lat={lat} lng={lng} onClick={() => onClick(lat, lng)}>
      <KebabIcon />
    </div>
  );
};

export default Marker;
