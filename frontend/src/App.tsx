import { Routes, Route } from 'react-router-dom'
import Index from './Pages/Index'
import ListingResults from './Pages/Listings/ListingResults'
import SingleListing from './Pages/Listings/SingleListing'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import Admin from './Pages/Admin/Admin'
import ListingForm from './Pages/Admin/Listing/ListingForm'

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path={"/"} element={<Index/>}/>
        <Route path={"/listing"} element={<ListingResults/>} />
        <Route path={"/listing/:id"} element={<SingleListing />}/>
        <Route path={"/admin"} element={<Admin />} />
        <Route path={"/admin/add"} element={<ListingForm />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
