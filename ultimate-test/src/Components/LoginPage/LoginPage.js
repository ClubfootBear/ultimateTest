import React from "react"
import 'antd/dist/antd.css'
import NormalLoginForm from "./LoginForm/LoginForm";
import "./LoginPage.css"
import Organization from "./Orzanization/Orzanization";


const LoginPage = () => {
    return (
        <div >
            <div className="loginModal">
                <div className="loginForm">
                    <NormalLoginForm/>
                </div>
                <div className="organizationInfo">
                    <Organization/>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;


