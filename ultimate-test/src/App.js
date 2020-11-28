import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginPage from "./Components/LoginPage/LoginPage";
import HospitalBeds from "./Components/HospitalBeds /HospitalBeds";
import React, {useEffect} from "react";
import {useApi} from "./Context/ApiContext";
import {useLogin} from "./Context/LoginContext";

function App() {
    const {isAuth} = useLogin();

    // const { getRefreshToken } = useApi();
    //
    // useEffect(() => {
    //     getUserData();
    // }, []);
    //
    // async function getUserData() {
    //     const token = await getRefreshToken();
    //
    //     const response = await fetch(`http://example.com/api`, {
    //         headers: { Authorization: `Bearer ${token}` },
    //     });
    //     const data = await response.json();
    //
    //     // we have data!
    // }


    return (
        // <Router>
        <div className="app">
            {!isAuth && <LoginPage/>}
            {isAuth && <HospitalBeds/>}
        </div>
        // </Router>
    );
}

export default App;
