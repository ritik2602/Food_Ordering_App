import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu=()=>{
    const [resInfo,setresInfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[])
    const fetchMenu=async () =>{
        const data=await fetch("");
        const json=await data.json();
        console.log(json);
    }
    if(resInfo===null) return <Shimmer/>
    return(
        <div className="menu">
            <h1>Name of Rest</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu;