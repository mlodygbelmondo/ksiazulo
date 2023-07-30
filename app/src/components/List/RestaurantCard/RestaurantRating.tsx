import { Rating } from "@mui/material";

interface OwnProps {
  rating: number;
}

const RestaurantRating = ({ rating }: OwnProps) => {
  const formattedRating = rating.toFixed(1);

  return (
    <div className="flex items-center gap-1 font-extrabold text-indigo-950">
      <Rating
        name="half-rating-read"
        value={rating / 2}
        precision={0.5}
        readOnly
      />
      {formattedRating}
    </div>
  );
};

export default RestaurantRating;
