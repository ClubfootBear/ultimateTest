import React from "react"
import 'antd/dist/antd.css'
import NormalLoginForm from "./LoginForm/LoginForm";
import "./LoginPage.css"
import Organization from "./Orzanization/Orzanization";
import Developer from "./Developer/Developer";
import {useLogin} from "../../Context/LoginContext";


const LoginPage = () => {
    const {onUserName, onPassword, onLogin} = useLogin();

    return (
        <div >
            <div className="loginModal">
                <div className="loginForm">
                    <NormalLoginForm
                        onUserName={onUserName}
                        onPassword={onPassword}
                        onLogin={onLogin}
                    />
                </div>
                <div className="organizationInfo">
                    <Organization/>
                </div>
            </div>
            <Developer />
        </div>
    )
}

export default LoginPage;


