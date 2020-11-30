import './App.css';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginPage from "./Components/LoginPage/LoginPage";
import HospitalBeds from "./Components/HospitalBeds /HospitalBeds";
import React from "react";
import {useLogin} from "./Context/LoginContext";

function App() {
    const {isAuth} = useLogin();

    return (
        <div className="app">
            {!isAuth && <LoginPage/>}
            {isAuth && <HospitalBeds/>}
        </div>
    );
}

export default App;
