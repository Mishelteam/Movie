import React, { useState, useEffect } from 'react';
import axios from "axios"
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Toggle = () => {
  let dispatch = useDispatch()
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])
  const [data4, setData4] = useState([])
  const [Check, setCheck] = useState(true)
  const [Check2, setCheck2] = useState(true)

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=8097117106fca57441a35aeb0b61891f&language=en-US&page=1`)
      .then(res => {
        setData(res.data.results);
      })

    axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=8097117106fca57441a35aeb0b61891f&language=en-US&page=1`)
      .then(res => {
        setData3(res.data.results);
      })

    axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=acfaeb6837638498f011e5e16a9e305d&language=en-US&page=1`)
      .then(res => {
        setData2(res.data.results);
      })

    axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=acfaeb6837638498f011e5e16a9e305d&language=en-US&page=1`)
      .then(res => {
        setData4(res.data.results);
      })

  }, []);
  function send() {
    document.querySelector(".buttons1").classList.add("luboy")
    document.querySelector(".buttons").classList.remove("luboy1")
    setCheck(true)
  }
  function send1() {
    document.querySelector(".buttons").classList.add("luboy1")
    document.querySelector(".buttons1").classList.remove("luboy")
    setCheck(false)


  }
  function send3() {
    document.querySelector(".buttons3").classList.add("luboy")
    document.querySelector(".buttons4").classList.remove("luboy1")
    setCheck2(true)
  }
  function send4() {
    document.querySelector(".buttons4").classList.add("luboy1")
    document.querySelector(".buttons3").classList.remove("luboy")
    setCheck2(false)
  }


  // function Chiqar(index) {
  //   document.querySelector(".more_card").classList.toggle("d-none")
  // }



  return (
    <div className='container-fluid'>
      <div className="section">
        <div className="section ps-5 my-4">
          <div className="d-flex justify-content-start">
            <h3>What's Popular</h3>
            <div className='d-flex ms-3 myBtn border px-2  justify-content-around align-items-center'>
              <p className='buttons1  fw-bold mt-3 luboy' onClick={send}>On TV</p>
              <p className='buttons  fw-bold mt-3' onClick={send1}>In Theaters</p>
            </div>
          </div>
        </div>
        <div className="row ps-5">
          <div className="swiffy-slider slider-item-show6   slider-nav-sm slider-nav-visible  slider-item-snapstart slider-nav-autoplay slider-nav-autopause   slider-item-ratio-contain slider-item-ratio-32x2 bg-white  py-1 py-lg-2" data-slider-nav-autoplay-interval="9999999">
            <div className="slider-container">
              {
                (data.length > 0 && Check) && data.map((item, index) => {
                  return (
                    <div className='carusel1' key={index}>
                      <div className="positsiya">
                        <div className="line">
                          <div className='pratsent'>{item.vote_average * 10} <sup className='sup'>%</sup>
                          </div>
                          <div className='more'>...</div>
                          <div className=' more_card'>
                            <div className='d-flex justify-content-around my-2 pointer' onClick={() => { dispatch({ type: "add", payload: item }) }}><i class="bi bi-heart-fill"></i>Favorite</div>
                            <div className='d-flex justify-content-around my-2 pointer' onClick={() => { dispatch({ type: 'addWacchlist', payload: item }) }} ><i class="bi bi-save-fill"></i> Watchlist</div>
                          </div>
                        </div>
                      </div>
                      <Link to={`/about/:${item.id}`} state={{id: item.id}}> <img className='carusel1_image' src={`https://image.tmdb.org/t/p/w300` + item.poster_path} loading="lazy" alt="" /></Link>

                      <div className="mt-4 text-start">
                        <h6 className='fw-bold fs-6'>{item.name}</h6>
                        <p>{item.first_air_date}</p>
                      </div>
                    </div>
                  )
                })
              }

              {
                (data3.length > 0 && Check === false) && data3.map((item, index) => {
                  return (
                    <div className='carusel1' key={index}>
                      <div className="positsiya">
                        <div className="line">
                          <div className='pratsent'>{item.vote_average * 10} <sup className='sup'>%</sup>
                          </div>
                          <div className='more'>...</div>
                          <div className=' more_card'>
                            <div className='d-flex justify-content-around my-2 pointer' onClick={() => { dispatch({ type: "add", payload: item }) }}><i class="bi bi-heart-fill"></i>Favorite</div>
                            <div className='d-flex justify-content-around my-2 pointer' onClick={() => { dispatch({ type: 'addWacchlist', payload: item }) }} ><i class="bi bi-save-fill"></i> Watchlist</div>
                          </div>
                        </div>
                      </div>
                      <img className='carusel1_image' src={`https://image.tmdb.org/t/p/w300` + item.poster_path} loading="lazy" alt="" />

                      <div className="mt-4 text-start">
                        <h6 className='fw-bold fs-6'>{item.name}</h6>
                        <p>{item.first_air_date}</p>
                      </div>
                    </div>
                  )
                })
              }

            </div>
            <button type="button" className="slider-nav" aria-label="Go left"></button>
            <button type="button" className="slider-nav slider-nav-next" aria-label="Go left"></button>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section ps-5 my-4">
          <div className="d-flex justify-content-start">
            <h3>Trending</h3>
            <div className='d-flex ms-3 myBtn border px-2  justify-content-around align-items-center'>
              <p className='buttons3  fw-bold mt-3 luboy' onClick={send3}>Today</p>
              <p className='buttons4  fw-bold mt-3' onClick={send4}>This week</p>
            </div>
          </div>
        </div>
        <div className="row ps-5">
          <div className="swiffy-slider slider-item-show6   slider-nav-sm slider-nav-visible  slider-item-snapstart slider-nav-autoplay slider-nav-autopause   slider-item-ratio-contain slider-item-ratio-32x2 bg-white  py-1 py-lg-2" data-slider-nav-autoplay-interval="9999999">
            <div className="slider-container">
              {
                (data2.length > 0 && Check2) && data2.map((item, index) => {
                  return (
                    <div className='carusel1' key={index}>
                      <div className="positsiya">
                        <div className="line">
                          <div className='pratsent'>{item.vote_average * 10} <sup className='sup'>%</sup>
                          </div>
                          <div className='more'>...</div>
                          <div className=' more_card'>
                            <div className='d-flex justify-content-around my-2 pointer' onClick={() => { dispatch({ type: "add", payload: item }) }}><i class="bi bi-heart-fill"></i>Favorite</div>
                            <div className='d-flex justify-content-around my-2 pointer' onClick={() => { dispatch({ type: 'addWacchlist', payload: item }) }} ><i class="bi bi-save-fill"></i> Watchlist</div>
                          </div>
                        </div>
                      </div>
                      <img className='carusel1_image' src={`https://image.tmdb.org/t/p/w300` + item.poster_path} loading="lazy" alt="" />

                      <div className="mt-4 text-start">
                        <h6 className='fw-bold fs-6'>{item.name}</h6>
                        <p>{item.first_air_date}</p>
                      </div>
                    </div>
                  )
                })
              }

              {
                (data4.length > 0 && Check2 === false) && data4.map((item, index) => {
                  return (
                    <div className='carusel1' key={index}>
                      <div className="positsiya">
                        <div className="line">
                          <div className='pratsent'>{item.vote_average * 10} <sup className='sup'>%</sup>
                          </div>
                          <div className='more'>...</div>
                          <div className=' more_card'>
                            <div className='d-flex justify-content-around my-2 pointer' onClick={() => { dispatch({ type: "add", payload: item }) }}><i class="bi bi-heart-fill"></i>Favorite</div>
                            <div className='d-flex justify-content-around my-2 pointer' onClick={() => { dispatch({ type: 'addWacchlist', payload: item }) }} ><i class="bi bi-save-fill"></i> Watchlist</div>
                          </div>
                        </div>
                      </div>
                      <img className='carusel1_image' src={`https://image.tmdb.org/t/p/w300` + item.poster_path} loading="lazy" alt="" />

                      <div className="mt-4 text-start">
                        <h6 className='fw-bold fs-6'>{item.name}</h6>
                        <p>{item.first_air_date}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <button type="button" className="slider-nav" aria-label="Go left"></button>
            <button type="button" className="slider-nav slider-nav-next" aria-label="Go left"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toggle;









