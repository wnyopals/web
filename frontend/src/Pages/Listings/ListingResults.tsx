
import ListingResult from "../../components/ListingResult/ListingResult";
import { useGetAllListingsQuery } from "../../store/features/apiSlice";
import "./ListingResults.css"


function ListingResults(){
  const {data, isLoading, isError, isSuccess} = useGetAllListingsQuery();

  const results = [];

  if (isSuccess) {
    for (const listing of data) {
      const component = (
        <ListingResult listing={listing}/>
      )
      results.push(component)
    }
  } else if (isLoading) {
    const component = (
      <div>
        <h1>Loading...</h1>
      </div>
    )
    results.push(component)
  } else if (isError) {
    const component = (
      <div>
        <h1>Error</h1>
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
