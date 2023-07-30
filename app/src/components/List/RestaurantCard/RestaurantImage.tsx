/* eslint-disable @next/next/no-img-element */
import { AspectRatio, Skeleton } from "@mui/joy";

const RestaurantImage = () => {
  return (
    <AspectRatio className="w-40" ratio="21/10">
      <Skeleton variant="overlay">
        {/* //TODO: handle image properly and add real images */}
        <img
          alt="Restaurant image"
          src="https://images.unsplash.com/photo-1686548812883-9d3777f4c137?h=400&fit=crop&auto=format&dpr=2"
        />
      </Skeleton>
    </AspectRatio>
  );
};

export default RestaurantImage;
