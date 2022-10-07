import React from "react";
import { Routes, Route } from "react-router-dom";
import './styles/App.css';
import {
    Navbar,
    Profile,
    Footer,
    News,
    Music,
    Settings,
    NotFound,
    DialogsContainer,
    UsersContainer,
    HeaderContainer,
} from "./components/index"
import ProfileContainer from "./components/profile/ProfileContainer";

function App() {
    return (
        <div className='appWrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='contentWrapper'>
                <Routes>
                    <Route path='/' element={<Profile />} />
                    <Route path='/profile' element={<ProfileContainer />} />
                    <Route path='/profile/:id' element={<ProfileContainer />} />
                    <Route path='/massages' element={<DialogsContainer />} />
                    <Route path='/massages/:id' element={<DialogsContainer />} />
                    <Route path='/users' element={<UsersContainer />} />
                    <Route path='/users/:id' element={<UsersContainer />} />
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
