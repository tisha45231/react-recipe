import React, {useState, useEffect} from 'react';
import {useParams, useNavigate } from 'react-router-dom'
import {getFilterCategory} from '../api'
import Preloader from "../components/Preloader";
import MealList from "../components/MealList";

const Category = () => {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getFilterCategory(name).then((data) => setMeals(data.meals));
    },[name])

    return (
        <div>
            <button onClick={() => navigate(-1)} className="btn">GO back</button>
            {!meals.length ? <Preloader/> : <MealList meals={meals}/>}
        </div>
    );
};

export default Category;