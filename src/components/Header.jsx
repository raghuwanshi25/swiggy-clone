import { Link } from "react-router-dom";
import useNetwork from "../utils/useNetwork";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { useState } from "react";
const Header = () => {
  const status = useNetwork();
  const {user}=useContext(UserContext)
  const cartItem= useSelector((store)=>store.cart.items)
  const [logValue,setLogValue]=useState("Login")
  return (
    <div className="flex justify-between items-center bg-pink-100">
      <div>
        <img
          className="w-32"
          alt="logo-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnn4m1Ap6mClU9fZq6esWlK8E6vIvB5mKk2T9XCxzs4QhA5LeOXh3EVy_HrM1_lgXDTxY&usqp=CAU"
        />
      </div>
      <div>
        <ul className="flex mr-4">
          <li className="px-2 text-lg">Online:{status ? "✅" : "🔴"}</li>
          <li className="px-2 text-lg">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-2 text-lg">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-2 text-lg">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-2 text-lg">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="px-2 text-lg"><Link to={"/cart"}>Cart {cartItem.length===0?null:(cartItem.length)}</Link></li>
          <Link><button className="px-2 text-lg" onClick={()=>logValue==="Login"?setLogValue("Logout"):setLogValue("Login")} >{logValue}</button></Link>
          <li className="px-2 text-lg">{user}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
