import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu=()=>{
    const [resInfo,setresInfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[])
    const {resId}=useParams();
    const fetchMenu=async () =>{
        const data=await fetch(MENU_API+resId);
        const json=await data.json();
        console.log(json);
        setresInfo(json);
    }
    if(resInfo===null) return <Shimmer/>
    const {name, cuisines} =resInfo;
    const {itemCard} =resInfo;
    return(
        <div className="menu">
            <h1>Name of Rest</h1>
            <h3></h3>
            <h2>Menu</h2>
            <ul>
                {itemCard.map((item)=>{
                    <li>Yes</li>
                })}
                <li>Biryani</li>
                <li>Burger</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu;