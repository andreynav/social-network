import React from "react";
import {Routes, Route} from "react-router-dom";
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
    Login,
    withRouter,
    Loader
} from "./components/index"
import ProfileContainer from "./components/profile/ProfileContainer";
import {connect, useDispatch} from "react-redux";
import {initializeApp} from "./store/appReducer";
import {compose} from "@reduxjs/toolkit";
import {useEffect} from "react";

function App(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeApp());
    }, []);

    if (!props.isInitialized) {
        return <Loader/>
    }

    return (
        <div className='appWrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='contentWrapper'>
                <Routes>
                    <Route path='/' element={<Profile/>}/>
                    <Route path='/profile' element={<ProfileContainer/>}/>
                    <Route path='/profile/:id' element={<ProfileContainer/>}/>
                    <Route path='/massages' element={<DialogsContainer/>}/>
                    <Route path='/massages/:id' element={<DialogsContainer/>}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                    <Route path='/users/:id' element={<UsersContainer/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/*' element={<NotFound/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isInitialized: state.app.isInitialized,
});

export default compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App);
