import './App.css';
import React from 'react';
import { Routes, Link, Route } from 'react-router-dom';
import WeatherApp from './weather/WeatherApp'
import NewsApp from './news/NewsApp'
import Menu from './menu/Menu'
import TriviaFunc from './trivia/TriviaFunc'
import Header from './Header'

function App() {
  return (
    
    <main>
      <Header />
      <nav>
        <ul>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li> <Link to="/trivia">Trivia</Link> </li>
          <li> <Link to='/menu'>Menu</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" />
        <Route path="/weather" element={<WeatherApp />} />
        <Route path="/news" element={<NewsApp />} />
        <Route path='/trivia' element={<TriviaFunc/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route element={Error} />
      </Routes>
    </main>
    
  );
}

export default App;
