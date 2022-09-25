import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Poplar = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=acfaeb6837638498f011e5e16a9e305d&language=en-US&page=1")
      .then(ress => {
        setPopular(ress.data.results)
      })
      .catch(err => {
        console.log(err);
      })
    console.log(popular);
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <h3>Top Rated Movies</h3>
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item my-3 shadow">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Accordion 
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                </div>
              </div>
              <div className="accordion-item my-3 shadow">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Accordion 
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
              </div>
              <div className="accordion-item my-3 shadow">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Accordion
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-10">
            <div className="row">
              {
                (popular.length > 0) && popular.map((item, index) => {
                  return (
                    <div className='carusel1 col-2 my-3' key={index}>
                      <div className="card my_card shadow ">
                        <div className="positsiya">
                          <div className="line ">
                            <div className='pratsent'>{item.vote_average * 10} <sup className='sup'>%</sup>

                            </div>
                          </div>
                        </div>
                        <img className='carusel1_image' src={`https://image.tmdb.org/t/p/w300` + item.poster_path} loading="lazy" alt="" />

                        <div className="mt-4 text-start px-2">
                          <h6 className='fw-bold fs-6'>{item.title}</h6>
                          <p>{item.release_date}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poplar;
