import React from 'react'
import { Link } from 'react-router-dom'


export default function NavScrollExample() {


  return (
    <div>
      <div className="background">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link to={"/"}>  <img width="150px" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Movies</a>
                  <ul>
                    <li> <Link className='text-black text-decoration-none' to="/popular"> Popular</Link> </li>
                    <li> <Link className='text-black text-decoration-none' to="/NowPlaying"> Now Playing</Link> </li>
                    <li> <Link className='text-black text-decoration-none' to="/Upcoming">Upcoming</Link> </li>
                    <li> <Link className='text-black text-decoration-none' to="/Rated"> Top Rated</Link> </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">TV Shows</a>
                  <ul>
                    <li> <Link className='text-black text-decoration-none' to="/popular"> Popular</Link> </li>
                    <li> <Link className='text-black text-decoration-none' to="/Airing"> Airing Today</Link> </li>
                    <li> <Link className='text-black text-decoration-none' to="/OnTv"> On TV</Link> </li>
                    <li> <Link className='text-black text-decoration-none' to="/Rated"> Top Rated</Link> </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">People</a>
                  <ul>
                    <li> <Link className='text-black text-decoration-none' to="/People"> Popular People</Link> </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Saved</a>
                  <ul>
                    <li> <Link className='text-black text-decoration-none' to="/seeJsx"> Favourute</Link> </li>
                    <li> <Link className='text-black text-decoration-none' to="/seeJsx1">  Watchlist </Link> </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex align-items-center" role="search">
                <h2 className='text-white fw-bold'>+</h2>
                <select className='form-control mx-4 h-25 fw-bold' name="" id="">
                  <option value="UZ" selected>UZ</option>
                  <option value="RU">RU</option>
                </select>
                <h6 className='text-white mx-3'>Login</h6>
                <h6 className='text-white mx-3'>Join_TDMB</h6>
                <p><i class="bi bi-search fw-bold fs-5 mx-3 mt-5 search_icon"></i></p>
              </form>
            </div>
          </div>
        </nav>
      </div>


    </div>
  )
}
