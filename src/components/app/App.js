import React, {useEffect, lazy, Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import '../../styles/App.css';
import {
    Navbar,
    Footer,
    News,
    Music,
    Settings,
    NotFound,
    HeaderContainer,
    Login,
    withRouter,
    Loader
} from "../index"
import {connect, useDispatch} from "react-redux";
import {initializeApp, selectIsInitialized} from "../../store/appReducer";
import {compose} from "@reduxjs/toolkit";

const DialogsContainer = lazy(() => import ('../dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('../profile/ProfileContainer'));
const UsersContainer = lazy(() => import('../users/UsersContainer'));

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
                <Suspense fallback={<Loader/>}>
                    <Routes>
                        <Route path='/' element={<ProfileContainer/>}/>
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
                </Suspense>
            </div>
            <Footer/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isInitialized: selectIsInitialized(state),
});

export default compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App);
