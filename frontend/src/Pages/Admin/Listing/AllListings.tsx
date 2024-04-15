import ListingResult from "../../../components/ListingResult/ListingResult";
import { useGetAllListingsQuery } from "../../../store/features/apiSlice";

const AllListings: React.FC = () => {
  const { data, status } = useGetAllListingsQuery();

  let component;

  if (status === "pending") {
    component = <h1>Loading</h1>;
  } else if (status === "fulfilled") {
    component = data?.map((listing) => {
      return (
        <>
          <ListingResult listing={listing} />
        </>
      );
    });
  }

  return (
    <div>
      <div>
        <h1>Welcome!</h1>
        <button>Add a listing</button>
        <button>Find a listing</button>
      </div>
      {component}
    </div>
  );
};

export default AllListings;
