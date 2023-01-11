import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Create from './Pages/Create';
import Edit from './Pages/Edit';
import View from './Pages/View';
import BrandIndex from './BrandPages/BrandIndex';

function App() {
  return (
    <div className="App ">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header> */}


      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <div className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to="/" className='nav-link'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="/create" className='nav-link'>Create</Link>

            </li>

            <li>
              <Link to="/brands" className='nav-link'>Brand</Link>
            </li>
        </div>
      </nav>

      <div className='container'>
        <Routes>
          <Route path="/" element = {<Home/>}/> 
          <Route path="/create" element = {<Create/>}/> 
          <Route path="/edit/:id" element= {<Edit/>} />
          <Route path="/view/:id" element= {<View/>} />
          <Route path="/brands" element={<BrandIndex/>} />

        </Routes>

      </div>
    </div>
  );
}

export default App;
