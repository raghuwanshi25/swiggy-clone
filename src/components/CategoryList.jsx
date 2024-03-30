import FoodList from "./FoodList"
const CategoryList=({itemInfo,show, setShow , setBack})=>{
    
    const {itemCards} = itemInfo?.card?.card
    const handleClick=()=>{
        setShow()
    }
    const handleBack=()=>{
        setBack()
    }
    return(
        <div>
            <div className="flex justify-between shadow-md py-4 px-2 items-center my-1 mb-3 cursor-pointer" onClick={()=>{show?handleBack():handleClick()}}>
                <span className="font-bold text-base text-gray-950">{itemInfo?.card?.card?.title}</span>
                <span>˅</span>
            </div>
            {
                itemCards.map((item)=>show?<FoodList key={item?.card?.info?.id} dishInfo={item}/>:null)
            }
        </div>
    )
}
export default CategoryList