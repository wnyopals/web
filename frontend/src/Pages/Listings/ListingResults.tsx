import { Link } from "react-router-dom";
import ListingResult from "../../components/ListingResult/ListingResult";
import { useGetAllListingsQuery } from "../../store/features/apiSlice";
import "./ListingResults.css"


function ListingResults() {
  const response = useGetAllListingsQuery(null);

  const results = [];

  console.log("response: ", response)

  if (response.status === "fulfilled") {
    for (const listing of response.data) {
      const component = (
        <Link to={`/listing/${listing?.id}`}>
          <ListingResult listing={listing}/>
        </Link>
      )
      results.push(component)
    }
  } else if (response.status === "pending") {
    const component = (
      <div>
        <h1>Loading...</h1>
      </div>
    )

    results.push(component)
  }

  return (
    <div className="listing-results">
      {results}
    </div>
  )
}

export default ListingResults
