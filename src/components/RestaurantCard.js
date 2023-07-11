import React from "react";
import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        name,
        cuisines,
        avgRating,
        cloudinaryImageId
    } = resData?.data;
    return(
        <div className="res-card">
            <img 
                src={CDN_URL + cloudinaryImageId} 
                alt="res-image" 
                className="res-logo" 
            />
            <h3>{name}</h3>
            <h3>{cuisines.join(" , ")}</h3>
            <h3>{avgRating}</h3>
        </div>
    )
}

export default RestaurantCard;