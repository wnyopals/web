import "./ListingResult.css"

import { listing } from "../../../types/Listing"

const ListingResult: React.FC<{listing: listing}> = ({listing}) => {
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
    </div>
  )
}

export default ListingResult
