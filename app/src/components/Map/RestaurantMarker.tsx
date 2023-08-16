import KebabIcon from "../RestaurantsIcons/KebabIcon";

interface OwnProps {
  lat: number;
  lng: number;
  onClick: (lat: number, lng: number) => void;
}
const RestaurantMarker = ({ lat, lng, onClick }: OwnProps) => {
  return (
    <div lat={lat} lng={lng} onClick={() => onClick(lat, lng)}>
      {/* TODO: Make it render different content based on the restaurant category, use switch statement */}
      <KebabIcon />
    </div>
  );
};

export default RestaurantMarker;
