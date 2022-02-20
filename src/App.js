import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => {
    return <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <Main/>
        <Footer/>
    </div>;
}

export default App;
