import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/Profile/News";
import Music from "./components/Profile/Music";
import Settings from "./components/Profile/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route
                            path="/"
                            element = {<Profile postData={props.state.profilePage.postData}/>}
                        />
                        <Route
                            path="/dialogs/*"
                            element={
                                <Dialogs
                                    dialogsData={props.state.dialogsPage.dialogsData}
                                    messagesData={props.state.dialogsPage.messagesData}
                                />
                            }
                        />
                        <Route path="/news" element={<News />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;