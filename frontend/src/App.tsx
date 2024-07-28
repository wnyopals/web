import { Routes, Route } from "react-router-dom";
import Index from "./Pages/Index";
import ListingResults from "./Pages/Listings/ListingResults";
import SingleListing from "./Pages/Listings/SingleListing";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Admin from "./Pages/Admin/Admin";
import AddListingFormWrapper from "./components/Forms/Listing/AddListingFormWrapper/AddListingFormWrapper";
import EditListingFormWrapper from "./components/Forms/Listing/EditListingFormWrapper/EditListingFormWrapper";
import SignInForm from "./Pages/UserSignIn/SignInForm";
import SignUpForm from "./Pages/UserSignUp/SignUpForm";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={"/"} element={<Index />} />
        <Route path={"/listing"} element={<ListingResults />} />
        <Route path={"/listing/:id"} element={<SingleListing />} />
        <Route path={"/admin"} element={<Admin />} />
        <Route path={"/admin/add"} element={<AddListingFormWrapper />} />
        <Route
          path={"/admin/update/:id"}
          element={<EditListingFormWrapper />}
        />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
