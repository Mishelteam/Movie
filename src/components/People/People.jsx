import React, { useState, useEffect } from 'react';
import axios from 'axios';

const People = () => {
    const [people, setpeople] = useState([]);
    useEffect(() => {
        axios.get(`
        https://api.themoviedb.org/3/person/popular?api_key=acfaeb6837638498f011e5e16a9e305d&language=en-US&page=1`)
            .then(res => {
                setpeople(res.data.results)
                console.log(res.data.results);
            })
    }, []);
    return (
        <div className='container-fluid'>
            <h4 className='text-start'>Popular People</h4>
            <div className="row">
                {
                    (people.length > 0) && people.map((item, index) => {
                        return (
                            <div className="col-2 my-2 " key={index}>
                                <div className='card shadow'>
                                    <div className=' my__caard'>
                                        <img className='img-fluid' src={`https://image.tmdb.org/t/p/w500/`+item.profile_path} alt={item.name} />
                                    </div>
                                    <h5>{item.name}</h5>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default People;
