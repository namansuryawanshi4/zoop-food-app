import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([])

    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    }, [])
    
    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5904779&lng=73.7271909&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);   // Optional chaining
        setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    };

    // Conditional rendering using Ternary operator
    
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">

                    <input 
                        type="text" 
                        className="search-box" 
                        value={searchText}
                        onChange={(e)=>{setSearchText(e.target.value)}} 
                        />
                    <button 
                        className="search-btn"
                        onClick={()=>{
                            const filteredRestaurant = listOfRestaurants.filter((res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase()) )
                            setFilteredRestaurant(filteredRestaurant)
                        }}
                        >Search</button>
                

                <button onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.data.avgRating > 4
                        );
                        setListOfRestaurants(filteredList);
                        }}
                        className="filter-btn">Top Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant) => ( 
                        <Link 
                            style={{ textDecoration: 'none' }}
                            key={restaurant.data.id}
                            to={"/restaurants/" + restaurant.data.id}
                        >
                            <RestaurantCard resData={restaurant}/>
                        </Link>
                        ))
                }
            </div>
        </div>
    );
};

export default Body;