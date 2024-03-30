
import FoodList from "./FoodList";
import { useSelector, useDispatch } from "react-redux";
import {clearItem} from "../utils/cartSlice"
const Cart = () => {
  const cartData = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearItem());
  };
  return (
    <div className="w-6/12 mx-auto mt-6">
      <div className="flex justify-between items-center mb-5">
        <h1 className=" font-semibold text-xl ">Cart ({cartData.length})</h1>
        <button
          className="bg-black text-white px-4 py-1 rounded-md hover:bg-gray-800 hover:text-slate-100"
          onClick={() => handleClear()}
        >
          Clear cart
        </button>
      </div>
      <hr className="mb-3"/>

      <div>
        {cartData.length === 0 ? (
          <h1 className="text-center">
            Your cart is empty please add some items.
          </h1>
        ) : (
          cartData.map((item) => <FoodList dishInfo={item} />)
        )}
      </div>
    </div>
  );
};
export default Cart;
