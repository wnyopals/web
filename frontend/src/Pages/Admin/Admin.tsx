import AllListings from "./Listing/AllListings";
import Inquiries from "./Inquiry/Inquiries";
import "./Admin.css";

const Admin = () => {
  return (
    <>
      <h1>AdminPage</h1>
      <div className="home_container">
        <Inquiries />
        <AllListings />
      </div>
    </>
  );
};

export default Admin;
