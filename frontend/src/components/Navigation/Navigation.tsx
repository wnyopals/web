import { useDispatch, useSelector } from "react-redux";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { RootState } from "../../store";
import { setAuthToken, setUser } from "../../store/auth";

const Navigation = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const cart = useSelector((state: RootState) => state.cart.cart)
  const dispatch = useDispatch();
  async function signOut(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    await dispatch(setUser({}));
    await dispatch(setAuthToken(""));
    alert("You have been signed out");
  }

  const auth = user.id ? (
    <div className="user-navigation">
      <button className={"navlink"} onClick={signOut}>Sign Out</button>
    </div>
  ) : (
    <div className="user-navigation">
      <NavLink className={"navlink"} to={"/sign-in"}>
        Sign in
      </NavLink>
      <NavLink className={"navlink"} to={"/sign-up"}>
        Sign up
      </NavLink>
    </div>
  );

  return (
    <nav>
      <div className="logo">
        <NavLink className={"navlink"} to={"/"}>
          WNYOpals
        </NavLink>
      </div>
      <div className="user-navigation">
        <NavLink className={"navlink"} to={"/about"}>
          About
        </NavLink>
        <NavLink className={"navlink"} to={"/listing"}>
          Shop
        </NavLink>
        <NavLink className={"navlink"} to={"/education"}>
          Education
        </NavLink>
        <NavLink className={"navlink"} to={"/experience"}>
          Experience
        </NavLink>
        {auth}
        <NavLink className={"navlink"} to={"/cart"}>
          Cart {cart.length}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
