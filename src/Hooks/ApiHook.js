import React,{useEffect,useState} from "react"
import ServiceObj from "../Services/AxiosService" 

const useAPIHooks = (path) => {
    const [data,setData] = useState([])
    useEffect(() => {
        ServiceObj.getData(path).then((response)=>{
            setData(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])
    return data
}

export default useAPIHooks