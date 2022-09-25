import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Search = () => {
    const params = useLocation()
    const [search, setSearch] = useState([]);
    const world = params.state.world
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=acfaeb6837638498f011e5e16a9e305d&language=en-US&page=1&include_adult=false`, {
            params: {
                query: world
            }
        })
        .then(ress => {
            setSearch(ress.data.results);
            console.log(ress.data.results);
        })
        .catch(err => {
            console.log(err);
        })  
    }, []);
    return (
        <div className='container-fluid row'> 
            <h4>Search Results</h4>
            {
                (search.length>0)&& search.map((item , index)=>{
                    return(
                        <div className="w-100 cardd text-center shadow my-3" key={index}>
                            <div className="d-flex justify-content-between">
                                <img className='img-fluid imgages' src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} alt={item.title} />
                              <div className="">
                                  <h4 className='mt-5 ms-5'>{item.title}</h4>
                              </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Search;
