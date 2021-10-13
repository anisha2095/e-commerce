import Product from "../Components/Product"
import useAPIHooks from "../Hooks/ApiHook"
import {Link} from 'react-router-dom'
import { useCookies } from 'react-cookie';
import React,{ useEffect, useState } from "react"

const HomePage = () =>{
    const AllProduct=useAPIHooks("/products")
   
    return(
        <div className="container">
            <Link to="/product" >ShowCart</Link>
            <div className="row">
                {
                    AllProduct.map((val)=>{
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

export default HomePage