import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Poplar from './components/component/Poplar';
import Header from './components/Header';
import Playing from './components/component/NowPlaying'
import Upcoming from './components/component/Upcoming'
import Rated from './components/component/Rated'
import Airing from './components/TV_SHOWS/Airing'
import OnTv from './components/TV_SHOWS/OnTv'
import People from './components/People/People';
import { Provider } from 'react-redux'
import store from './components/Favourite/Favourte';
import SeeFavourite from './components/Favourite/SeeFavourite';
import SeeWatchList from './components/Favourite/SeeWatchList';
import Search from './components/Search/Search';
import About from './components/AboutMovi/About';
import IdDetels from './components/Idedetels/IdDetels'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/Popular' element={<Poplar />} />
            <Route path='/NowPlaying' element={<Playing />} />
            <Route path='/Upcoming' element={<Upcoming />} />
            <Route path='/Rated' element={<Rated />} />
            <Route path='/Airing' element={<Airing />} />
            <Route path='/OnTV' element={<OnTv />} />
            <Route path='/People' element={<People />} />
            <Route path='/seeJsx' element={<SeeFavourite />} />
            <Route path='/seeJsx1' element={<SeeWatchList />} />  
            <Route path='/search/:id' element={<Search/>} />  
            // <Route path='/about/:id' element={<About/>} />  
            <Route path='/idDetal/:id' element={<IdDetels/>} />  
            <Route index element={<Header />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
