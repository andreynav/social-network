import React from "react";
import { Routes, Route } from "react-router-dom";
import './styles/App.css';
import {
    Header,
    Navbar,
    Profile,
    Footer,
    News,
    Music,
    Settings,
    NotFound,
    DialogsContainer
} from "./components/index"

function App() {
    return (
        <div className='appWrapper'>
            <Header />
            <Navbar />
            <div className='contentWrapper'>
                <Routes>
                    <Route path='/' element={<Profile />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/massages' element={<DialogsContainer />} />
                    <Route path='/massages/:id' element={<DialogsContainer />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/music' element={<Music />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
