import "./ListingResult.css"

import { listing } from "../../../types/Listing"
import { useDeleteListingMutation } from "../../store/features/apiSlice";

const ListingResult: React.FC<{listing: listing}> = ({listing}) => {
  
  const [
    deleteListing,
    {
      isLoading,
      isSuccess,
      isError,
    }
  ] = useDeleteListingMutation(listing.id);
  
  function onDeleteButtonClick(e) {
    e.preventDefault();
    console.log(listing)
    deleteListing(listing.id);
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
      <span className="quick-info">{listing?.length}x{listing?.width}x{listing?.height}</span>
      <br></br>
      <span className="price">{listing?.price}</span>
      <br/>
      <button>Edit listing</button>
      <button onClick={onDeleteButtonClick}>Delete Listing</button>
      {/* <StatusComponent /> */}
    </div>
  )
}

export default ListingResult
