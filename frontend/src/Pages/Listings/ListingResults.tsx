import { useGetAllListingsQuery } from "../../store/features/apiSlice";

function ListingResults() {
  const response = useGetAllListingsQuery(null);

  const results = [];

  console.log("response: ", response)

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
  } else if (response.status === "pending") {
    const component = (
      <div>
        <h1>Loading...</h1>
      </div>
    )

    results.push(component)
  }

  return (
    <div>
      Listing Results Page
      {results}
    </div>
  )
}

export default ListingResults
