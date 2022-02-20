import logo from './logo.png';
import poster from './poster.png';
import React from 'react';
import './App.css';

const App = () => {
    return <div className="app-wrapper">
        <header className="header">
            <img src={logo} alt="logo"/>
            <div>
                Bakery forum
            </div>
        </header>
        <div className="navbar">
            <ul>
                <li>Profile</li>
                <li>News</li>
                <li>Dialogs</li>
                <li>Music</li>
                <li>Settings</li>
            </ul>
        </div>
        <div className="content">
            <img src={poster} alt="poster"/>
            <div>
                <h1>Bread is...</h1>
                <div>
                    <p>
                        Bread is a staple food prepared from a dough of flour (usually wheat) and water,
                        usually by baking.<br/>
                        Throughout recorded history and around the world, it has been an important part of many
                        cultures' diet.<br/>
                        It is one of the oldest human-made foods, having been of significance since the dawn of
                        agriculture, and plays an essential role in both religious rituals and secular culture.
                    </p>
                    <p>
                        Bread may be leavened by naturally occurring microbes (e.g. sourdough),
                        chemicals (e.g. baking soda), industrially produced yeast, or high-pressure aeration,
                        which creates the gas bubbles that fluff up bread.<br/>
                        In many countries, commercial bread often contains additives to improve flavor, texture, color,
                        shelf life, nutrition, and ease of production.
                    </p>
                </div>
            </div>
        </div>
        <div className="footer">
            xander.org &copy; 2022
        </div>
    </div>;
}

export default App;
