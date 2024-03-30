import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useMenu = () => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);
  const { resId } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setMenuData(json?.data);
  };
  return menuData;
};
export default useMenu;
