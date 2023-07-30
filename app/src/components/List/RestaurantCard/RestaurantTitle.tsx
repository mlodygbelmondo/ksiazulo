interface OwnProps {
  title: string;
}

const RestaurantTitle = ({ title }: OwnProps) => {
  return <p>{title}</p>;
};

export default RestaurantTitle;
