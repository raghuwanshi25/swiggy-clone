import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Card = ({ resInfo }) => {
  const {user}=useContext(UserContext)
  return (
    <div data-testid="resCard" className="w-[200px] p-1 my-3 mx-5 rounded-sm bg-slate-100 hover:border border-solid border-black">
      <div className="h-[150px]">
        <img
          className="w-[100%] h-[100%] object-cover rounded-sm"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resInfo?.info?.cloudinaryImageId
          }
          alt="food-img"
        />
      </div>
      <h3 className="font-semibold text-base my-1">{resInfo?.info?.name}</h3>
      <h4>{resInfo?.info?.cuisines.join(", ")}</h4>
      <h4>{resInfo?.info?.avgRating}</h4>
      <h4>{resInfo?.info?.costForTwo}</h4>
      <h4>{user}</h4>
    </div>
  );
};
export default Card;

export const LabelCard=(Card)=>{
  return ({resInfo})=>{
    return(
      <div>
        <label className="bg-black text-white p-1 rounded-md text-sm absolute">Promoted</label>
        <Card {...{resInfo}}/>
      </div>
    )
  }
}
