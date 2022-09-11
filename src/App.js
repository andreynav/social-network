import './styles/App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";
import Dialogs from "./components/dialogs/Dialogs";
import { Routes, Route } from "react-router-dom";
import React from "react";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

function App() {
    return (
        <div className='appWrapper'>
            <Header />
            <Navbar />
            <div className='contentWrapper'>
                <Routes>
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/massages' element={<Dialogs />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/music' element={<Music />} />
                    <Route path='/settings' element={<Settings />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
