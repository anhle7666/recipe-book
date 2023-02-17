// use API from FoodData Central API

import axios from "axios";
import React, { useState } from "react";

const API_KEY = "YOUR_API_KEY";
const API_ENDPOINT = "https://api.nal.usda.gov/fdc/v1/foods/search";

function RecipeBook() {
    const [query, setQuery] = useState("");
    const [foods, setFoods] = useState([]);

    function searchFoods() {
        const params = {
            api_key: API_KEY,
            query: query,
        };
        axios
            .get(API_ENDPOINT, { params })
            .then((response) => {
                setFoods(response.data.foods);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            <button onClick={searchFoods}>Search</button>
            <ul>
                {foods.map((food) => (
                    <li key={food.fdcId}>{food.description}</li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeBook;
