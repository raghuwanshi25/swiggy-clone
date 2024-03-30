import useMenu from "../utils/useMenu";
import Shimmer from "./Shimmer";
import CategoryList from "./CategoryList";
import { useState } from "react";
const Menu = () => {
  const [show ,setShow]=useState(0)
  const menuData = useMenu();

  if (menuData === null) {
    return <Shimmer />;
  }

  const { name, cuisines, areaName, avgRating, totalRatingsString } =
    menuData?.cards[2]?.card?.card?.info;
    const categoryData = menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    

  return (
    <div className="w-6/12 mx-auto mt-6">
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-xl">{name}</h2>
          <h4 className="my-1 font-medium text-sm text-gray-500">
            {cuisines.join(", ")}
          </h4>
          <h4 className="font-medium text-sm text-gray-500">{areaName}</h4>
        </div>
        <div className="p-2 border border-solid border-gray-200">
          <h4 className="ml-2 text-green-600 font-medium">⭐ {avgRating}</h4>
          <hr className="my-2" />
          <p className="text-xs ">{totalRatingsString}</p>
        </div>
      </div>
      <hr className="my-3" />
      {categoryData.map((c,index)=><CategoryList key={c?.card?.card?.title} itemInfo={c} show={index===show?true:false} setShow={()=>setShow(index)} setBack={()=>setShow(null)}/>)}
    </div>
  );
};
export default Menu;
