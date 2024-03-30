import { useRouteError } from "react-router-dom"
const Error=()=>{
    const {status , statusText}= useRouteError()
    
    return(
        <div>
         <h1>OOPs something went wrong!</h1>
         <h3>{status}:{statusText}</h3>
        </div>
    )
}
export default Error;