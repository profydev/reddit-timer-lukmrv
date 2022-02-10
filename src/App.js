import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Home from './Pages/Home';
import Search from './Pages/Search';

function App() {
  return (
    <Router>
      <header>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
      </header>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>

      <div className="app">App Placeholder</div>

      <Footer />
    </Router>
  );
}

const Header = () => (
  <header>
    <Link to="/">Home</Link>
    <Link to="/search">Search</Link>
  </header>
);

const Footer = () => <footer>This is footer</footer>;

export default App;
