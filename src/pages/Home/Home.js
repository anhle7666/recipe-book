import React, { useState } from "react";
import "./home.css";
import axios from "axios";

const Home = () => {
    const API_KEY = "qyBIS12Wf5gJerFpYxG3gcN0CjXxomzSPsLO0Ofa";
    const API_ENDPOINT = "https://api.nal.usda.gov/fdc/v1/foods/search";

    const [query, setQuery] = useState("");
    const [foods, setFoods] = useState([]);
    const [selectedFood, setSelectedFood] = useState(null);

    function searchFoods(e) {
        e.preventDefault();

        const spinner = document.querySelector("#spinner");
        spinner.className = "spinner";
        const params = {
            api_key: API_KEY,
            query: query,
        };
        axios
            .get(API_ENDPOINT, { params })
            .then((response) => {
                setFoods(response.data.foods);
                spinner.className = "";
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function showFoodDetails(food) {
        setSelectedFood(food);
    }

    return (
        <div className="home-page">
            <h1>Type your food you want search</h1>
            <form className="form-search" onSubmit={searchFoods}>
                <input
                    className="input-search"
                    placehoder="Search food"
                    type="search"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                />
                <button
                    type="submit"
                    className="button-search"
                    disabled={!query}
                >
                    Search
                </button>
            </form>
            <div id="spinner"></div>
            <div className="listFoods">
                {selectedFood && (
                    <div className="foodDetails">
                        <h2>Description: {selectedFood.description}</h2>
                        <p>Brand: {selectedFood.brandOwner}</p>
                        <p>Ingredients: {selectedFood.ingredients}</p>
                    </div>
                )}

                <ul className="listItems">
                    {foods.map((food) => (
                        <li
                            className="itemFood"
                            key={food.fdcId}
                            onClick={() => showFoodDetails(food)}
                        >
                            {food.description}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
