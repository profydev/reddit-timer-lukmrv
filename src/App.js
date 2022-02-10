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
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>

      <Footer />
    </Router>
  );
}

const Header = () => (
  <header className="header">
    <Link to="/">
      <img src="logo.svg" alt="logo" />
    </Link>
    <div>

      <Link to="/search">Search</Link>
      <Link to="/">How it works</Link>
      <Link to="/">About</Link>
    </div>
  </header>
);

const Footer = () => <footer>This is footer</footer>;

export default App;
