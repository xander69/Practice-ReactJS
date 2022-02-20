import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {
    return <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
            <Main/>
            {/*<Profile/>*/}
            {/*<News/>*/}
            {/*<Dialogs/>*/}
            {/*<Music/>*/}
            {/*<Settings/>*/}
        </div>
        <Footer/>
    </div>;
}

export default App;
