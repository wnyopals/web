import "./ListingResult.css";

import { listing } from "../../../types/Listing";
import { useDeleteListingMutation } from "../../store/features/apiSlice";
import { Link, NavLink } from "react-router-dom";
import ImageSlideShow from "../ImageSlideShow/ImageSlideShow";

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
      <div>
        <ImageSlideShow images={                [
                  "https://i.ibb.co/yf6gYkm/F583-F9-CD-C3-B7-4803-A353-319-A3-F1-FB959-1-201-a.jpg",
                  "https://i.ibb.co/Y0fxXvb/9-B5-A39-F3-43-F3-48-B9-8-F7-F-E312-B6403-EF1-1-201-a.jpg",
                  "https://i.ibb.co/Nx7YMVB/5-A5-ED896-5317-46-D2-B6-B1-9-ECBE4-CE9535-1-201-a.jpg",
                ]} imageHeight={150} imageWidth={150} />
      </div>
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
