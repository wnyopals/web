import { Routes, Route } from 'react-router-dom'
import Index from './Pages/Index'
import ListingResults from './Pages/Listings/ListingResults'
import SingleListing from './Pages/Listings/SingleListing'

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Index/>}/>
      <Route path={"/listing"} element={<ListingResults/>} />
      <Route path={"/listing/:id"} element={<SingleListing />}/>
    </Routes>
  )
}

export default App
