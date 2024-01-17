interface OwnProps {
  city: string;
}
const ListHeader = ({ city }: OwnProps) => {
  return (
    <header className="p-2 pb-0 text-2xl font-bold">Lokalizacja: {city}</header>
  );
};
export default ListHeader;
