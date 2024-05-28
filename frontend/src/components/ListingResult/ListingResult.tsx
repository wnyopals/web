import "./ListingResult.css";

import { listing } from "../../../types/Listing";
import { useDeleteListingMutation } from "../../store/features/apiSlice";
import { Link, NavLink } from "react-router-dom";

const ListingResult: React.FC<{ listing: listing, admin: boolean }> = ({ listing, admin }) => {
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
        {admin && <button onClick={onDeleteButtonClick}>delete</button>}
        {admin && <NavLink to={`/admin/update/${listing.id ?? -1}`}>update</NavLink>}
      </div>
      {/* <StatusComponent /> */}
    </div>
  );
};

export default ListingResult;
