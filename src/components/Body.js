import {resList} from "../utils/mockkdata";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
    // local state variable
    const [listofRestaurants,setlistofRestaurants]=useState(resList);

    //normal js variable
    // let listofRestaurants=[];
    return(
        <div className="body">
            <div className="search"><button className="filter-btn" onClick={()=>{
                const filteredList=listofRestaurants.filter(
                    (res)=>res.info.avgRating>4
                );
                setlistofRestaurants(filteredList);
                 // console.log(filteredList);
            }}>Top Rated Restaurants</button></div>
            <div className="res-container">
                {
                    listofRestaurants.map(
                        (restaur)=>(
                        <RestaurantCard key={restaur.info.id} resData={restaur}/>
                ))}
            </div>
        </div>
    );
};

export default Body;