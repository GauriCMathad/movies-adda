import React, { useState } from 'react';
import {useEffect} from 'react';
import './App.css';
import SearchI from './search.svg';
import MovieCard from './MovieCard.jsx';

const API_URL='http://www.omdbapi.com?apikey=d08e9e02';
const App=()=>{
    const [movies,setMovies]=useState([]);
    const [searchIt,setSearchIt]=useState('');
    const searchM=async (title)=>{
        const response=await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();
        setMovies(data.Search);
    };
    useEffect(()=>{
        searchM('iron man');
    },[]);
    return (
        <div className='app'>
            <h1>MovieSpace</h1>
            <div className='search'>
                <input placeholder='Search for movies'
                       value={searchIt}
                       onChange={(e)=>setSearchIt(e.target.value)}
                />
               <img src={SearchI}
                    alt='search' 
                    onClick={()=>searchM(searchIt)}/>

            </div>
            {
                movies?.length >0
                ? (
                    <div className='container'>
                    {
                        movies.map((movie)=>(<MovieCard movie={movie}/>))
                    }
                </div>
                ):(
                    <div className='empty'><h2>No results found</h2></div>
                )
            }
           
        </div>
    );
}//d08e9e02
export default App;