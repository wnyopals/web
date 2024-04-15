import "./ListingResult.css";

import { listing } from "../../../types/Listing";
import { useDeleteListingMutation } from "../../store/features/apiSlice";
import { Link } from "react-router-dom";

const ListingResult: React.FC<{ listing: listing }> = ({ listing }) => {
  const [
    deleteListing,
    {
      isLoading,
      // isSuccess,
      isError,
    },
  ] = useDeleteListingMutation();

  function onDeleteButtonClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    deleteListing(listing.id ?? -1);
  }

  // let StatusComponent;

  if (isLoading) {
    // StatusComponent = (<h2>Deleting...</h2>)
  } else if (isError) {
    // StatusComponent = (<h2>Delete error</h2>)
  }

  return (
    <div className="listing-result">
      <img />
      <h3 className="title">{listing?.title}</h3>
      <p className="description">{listing?.description}</p>
      <span className="quick-info">
        {listing?.length}x{listing?.width}x{listing?.height}
      </span>
      <br></br>
      <span className="price">{listing?.price}</span>
      <br />
      <div>
        <Link to={`/listing/${listing?.id}`}>Visit this one</Link>
        <br/>
        <button onClick={onDeleteButtonClick}>Delete Listing</button>
        <br/>
        <Link to={`/admin/update/${listing?.id}`}>Update Listing</Link>
        <br/>
      </div>
      {/* <StatusComponent /> */}
    </div>
  );
};

export default ListingResult;
