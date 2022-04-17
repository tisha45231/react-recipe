import React, { useState, useEffect } from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import { getAllCategory } from '../api';
import Preloader from "../components/Preloader";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";





const Home = () => {

    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const {search} = useLocation();
    const navigate = useNavigate();

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        )
        navigate(`?category=${str}`)
    }

    useEffect(() => {
        getAllCategory().then(data => {
            setCatalog(data.categories);
            setFilteredCatalog(search ?
                data.categories.filter((item) => item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase()))
                : data.categories) ;
        })
    }, [search])

    return (
        <div>
            <Search cb={handleSearch}/>
            {!catalog.length ? <Preloader/> : (
                <CategoryList catalog={filteredCatalog} />
            )}
        </div>
    );
};

export default Home;