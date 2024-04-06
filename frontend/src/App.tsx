import { Routes, Route } from 'react-router-dom'
import Index from './Pages/Index'
import ListingResults from './Pages/Listings/ListingResults'
import SingleListing from './Pages/Listings/SingleListing'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path={"/"} element={<Index/>}/>
        <Route path={"/listing"} element={<ListingResults/>} />
        <Route path={"/listing/:id"} element={<SingleListing />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
