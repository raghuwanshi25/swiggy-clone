import Card from "./Card";
import { LabelCard } from "./Card";
import Shimmer from "./Shimmer";
import { useEffect ,useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Body = () => {
    const [resList, setResList]=useState([])
    const [oprList, setOprList]=useState([])
    const [searchText , setSearchText]= useState("")
    useEffect(()=>{fetchData()},[])

    const fetchData = async()=> {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setOprList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    
    const PromotedCard = LabelCard(Card)
    if(oprList.length===0){return <Shimmer/>}
    
    const {user,setUpdate}=useContext(UserContext)
  return (
    <div>
      <div className="my-5">
        <button className="bg-green-200 px-4 mx-4 rounded-sm" onClick={()=> {const filterList= resList.filter(x=>x?.info?.avgRating>4.3); setOprList(filterList)}}>Filter</button>
        <input data-testid="searchInput" className="ml-5 border border-solid border-black" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
        <button className="bg-green-200 px-4 ml-2 rounded-sm" onClick={()=>{const searchList = resList.filter(x=>x?.info?.name.toLowerCase().includes(searchText.toLowerCase()));setOprList(searchList)}}>Search</button>
        <input className="ml-7 border border-solid border-black" value={user} onChange={(e)=>setUpdate(e.target.value)}/>
      </div>
      <div className="flex flex-wrap justify-evenly">
      {oprList.map((resItem)=><Link to={"/restaurants/"+resItem?.info?.id} key={resItem?.info?.id}>{resItem?.info?.avgRating>4.4?<PromotedCard resInfo={resItem}/>:<Card  resInfo={resItem} />}</Link>)}
      
      </div>
    </div>
  );
};

export default Body
