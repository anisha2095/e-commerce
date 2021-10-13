import React,{ useEffect, useState } from "react"
import { useCookies } from 'react-cookie';
import useAPIHooks from "../Hooks/ApiHook"
import Product from "../Components/Product";
import { useParams } from "react-router";

const ShowCart = (props) => {

    const [cookies, setCookie] = useCookies([]);
    const [extra, setExtra] = useState("");

    useEffect(() => {
        // var CookiesData=cookies
        console.log(cookies)
        if("cartData" in cookies === false){
            // setCookie('cartData', productId, { path: '/', expires: tomorrow });
            // console.log("first product added in card")
        }
        else{
            var arr=cookies.cartData.split(",")
            // ?id=1&id=9&id=11&id=14
            // 1&id=9&id=11&id=14
            var ans = "?id="+arr.join(`&id=`)
            setExtra(ans)
        }
    },[])
    const cartDataProductWise=useAPIHooks("/products"+extra)
    console.log("show all cart",cartDataProductWise)

    return(
        <div className="container">
            <div className="row">
                {
                        cartDataProductWise.map((val)=>{
                        return (
                            <div className="col-md-4">
                                <Product product={val} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShowCart