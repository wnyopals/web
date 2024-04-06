import "./Navigation.css"
import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <nav>
        <div className="logo">
            <NavLink className={"navlink"} to={"/"}>WNYOpals</NavLink>
        </div>
        <div className="navigation">
            <NavLink className={"navlink"} to={"/about"}>About </NavLink>
            <NavLink className={"navlink"} to={"/listing"}>Shop </NavLink>
            <NavLink className={"navlink"} to={"/education"}>Education </NavLink>
            <NavLink className={"navlink"} to={"/experience"}>Experience </NavLink>
        </div>
        <div className="user-navigation">
            <NavLink className={"navlink"} to={"/sign-in"}>Sign in</NavLink>
            <NavLink className={"navlink"} to={"/sign-up"}>Sign ip</NavLink>
        </div>
    </nav>
  )
}

export default Navigation
