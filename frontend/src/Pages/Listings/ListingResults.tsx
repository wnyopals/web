import { useGetAllListingsQuery } from "../../store/features/apiSlice";

function ListingResults() {
  const response = useGetAllListingsQuery(null);

  const results = [];

  if (response.status === "fulfilled") {
    for (const item of response.data) {
      const component = (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      )
      results.push(component)
    }
  } else {

  }

  return (
    <div>
      Listing Results Page
      {results}
    </div>
  )
}

export default ListingResults
