import {useGetAllListingsQuery} from "../../store/features/apiSlice";

function ListingResults() {
  const {data} = useGetAllListingsQuery();

  const listings = [];
  for (const l of data) {
    const listing = (
      <div>
        <h3>{l.title}</h3>
        <p>{l.description}</p>
      </div>
    )
      listings.push(listing);
  }

  return (
    <div>
      Listing Results Page
      {listings}
    </div>
  )
}

export default ListingResults
