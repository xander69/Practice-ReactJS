import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = () => {
    return <BrowserRouter>
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/profile">
                        <Route index element={<ProfileContainer/>}/>
                        <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                    </Route>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/users">
                        <Route index element={<UsersContainer/>}/>
                        <Route path="/users/:page"  element={<UsersContainer/>}/>
                    </Route>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    </BrowserRouter>;
}

export default App;
