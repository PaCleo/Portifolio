import React from 'react';
import './App.css';
import Header from './Header/Header.jsx';
import Project from './Body/Body.jsx';
import Footer from './Footer/Footer.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <Project />
      <Footer/>
    </div>
  );
}

export default App;
