import './App.css';
import Toggle from './components/Toggle'
import NavScrollExample from './components/NavScrollExample';
import Static from './components/Static';
import {Outlet} from 'react-router-dom'
import Header from './components/Header';
import People from './components/People/People';
function App() {
  return (
    <div className="App">
      <NavScrollExample/>
      <Outlet/>
      
    </div>
  );
}

export default App;
