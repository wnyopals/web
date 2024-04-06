import { useParams } from "react-router-dom"
import { useGetListingByIdQuery } from "../../store/features/apiSlice"
import "./SingleListing.css"


const SingleListing = () => {
  const params = useParams();
  const { status, data } = useGetListingByIdQuery(params.id)

  console.log("Status: ", status);
  console.log("Data: ", data);
  console.log("Listing Id: ", params.id)

  let content;

  if (status === "fulfilled") {
    content = (
      <>
        <li className="information-item"><h3>Body Tone: {data?.BodyTone?.name}</h3></li>
        <li className="information-item"><h3>Brightness: {data?.Brightness?.name}</h3></li>
        <li className="information-item"><h3>Cut: {data?.Cut?.name}</h3></li>
        <li className="information-item"><h3>Dome: {data?.Dome?.name}</h3></li>
        <li className="information-item"><h3>Opal Type: {data?.OpalType?.name}</h3></li>
        <li className="information-item"><h3>Origin: {data?.Origin?.name}</h3></li>
      </>
    )
  } else if (status === "pending") {
    content = <h1>Loading</h1>
  } else if (status === "rejected") {
    content = (
      <div>
        <h1>Error</h1>
      </div>
    )
  }

  return (
    <div className="listing-container">
      <div className="showcase">
        <div className="basic-info">
          <div className="photos">
            <img/>
          </div>
          <div className="showcase-information">
            <h2 className="title">{data?.title}</h2>
            <p className="description">{data?.description}</p>
            <span>{data?.length} x {data?.width} x {data?.height}</span>
          </div>
        </div>
        <div className="purchase-info">
          <h2 className="price">${data?.price}</h2>
          <button>Buy Now</button>
          <button>Add to Cart</button>
          <button>Inquire</button>
        </div>
      </div>
      <div className="information">
        <h3>Information</h3>
        <ul className="information-list">
          {content}
        </ul>
      </div>
    </div>
  )
}

export default SingleListing
