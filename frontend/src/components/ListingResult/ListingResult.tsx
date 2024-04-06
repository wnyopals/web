import "./ListingResult.css"

type listingResponse = {
  listing: {
    title: string,
    description: string,
    length: number,
    width: number,
    height: number,
    price: number
  }
}

const ListingResult = ({listing}: listingResponse) => {
  return (
    <div className="listing-result">
      <img />
      <h3 className="title">{listing?.title}</h3>
      <p className="description">{listing?.description}</p>
      <span className="quick-info">{listing?.length}x{listing?.width}x{listing?.height}</span>
      <br></br>
      <span className="price">{listing?.price}</span>
    </div>
  )
}

export default ListingResult
