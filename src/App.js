import React from "react";
import { Routes, Route } from "react-router-dom";
import './styles/App.css';
import { Header,
    Navbar,
    Profile,
    Footer,
    Dialogs,
    News,
    Music,
    Settings,
    NotFound } from "./components/index"

function App({ state, dispatch }) {
    return (
        <div className='appWrapper'>
            <Header />
            <Navbar />
            <div className='contentWrapper'>
                <Routes>
                    <Route path='/' element={<Profile />} />
                    <Route path='/profile' element={<Profile profilePage={state.profilePage}
                                                             dispatch={dispatch} />} />
                    <Route path='/massages' element={<Dialogs dialogUsers={state.dialogPage.dialogUsers}
                                                              messages={state.dialogPage.messages} />}
                    />
                    <Route path='/massages/:id' element={<Dialogs dialogUsers={state.dialogPage.dialogUsers}
                                                                  messages={state.dialogPage.messages} />}
                    />
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
