import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData}=props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla}=resData?.info;
    return(
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <div className="info">
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime} mins</h4>
            </div>
        </div>
    )
}

export default RestaurantCard; 