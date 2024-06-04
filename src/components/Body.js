import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    // local state variable
    const [listofRestaurants,setlistofRestaurants]=useState([]);

    const [filteredRestaurant, setfilteredRestaurant]=useState([]);

    const [searchtext, setsearchtext]=useState([]);

    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata= async ()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6312471&lng=77.4372084&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json=await data.json();
        setlistofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

//conditional rendering
    // if(listofRestaurants.length===0){
    //     return <Shimmer/>;
    // }
    return listofRestaurants.length===0? <Shimmer/>:(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchtext} onChange={(e)=>{
                        setsearchtext(e.target.value);
                    }}/>
                    <button className="search-btn" onClick={()=>{
                        console.log(searchtext);
                        const filteredrest=listofRestaurants.filter(
                            (res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                        );
                        setfilteredRestaurant(filteredrest);
                    }}>search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                const filteredList=listofRestaurants.filter(
                    (res)=>res.info.avgRating>4
                );
                setfilteredRestaurant(filteredList);
                }}>Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map(
                        (restaur)=>(
                        <RestaurantCard key={restaur.info.id} resData={restaur}/>
                ))}
            </div>
        </div>
    );
};

export default Body;