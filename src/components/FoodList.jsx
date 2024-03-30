import { useDispatch } from "react-redux"
import { addItem} from "../utils/cartSlice"
const FoodList=({dishInfo})=>{
    const dispatch = useDispatch()

    const handleAddItem=(dishInfo)=>{
         dispatch(addItem(dishInfo))
    }
    
    return(
        <div className="">
        <div className="flex justify-between items-center p-2">
            <div className="w-10/12">
                <h3 className="font-semibold text-sm text-gray-900">{dishInfo?.card?.info?.name}</h3>
                <h3 className="my-1 font-medium text-xs text-gray-700">₹{dishInfo?.card?.info?.price/100}</h3>
                <h3 className="font-normal text-xs text-gray-500">{dishInfo?.card?.info?.description}</h3>
            </div>
            <div className="w-2/12 h-[90px] ml-4">
            <button className="px-2 bg-white text-gray-800 rounded-md absolute ml-8 hover:border-[2px] border-solid border-white " onClick={()=>handleAddItem(dishInfo)}>Add+</button>
                <img className="w-[100%] h-[100%] object-cover rounded-lg" alt="dish-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+dishInfo?.card?.info?.imageId}/>
            </div>
            
        </div>
        <hr className="my-3"/>
        </div>
    )
}
export default FoodList