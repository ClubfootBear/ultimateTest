import React from "react";
import "./Header.css"
import Organization from "../../LoginPage/Orzanization/Orzanization";
import {Button} from "antd";
import {useLogin} from "../../../Context/LoginContext";


const Header = () => {

    const {onLogout} = useLogin();


    return(
        <div className="HeaderWrapper">
            <div className="OrganizationWrapper">
                <Organization />
            </div>
            <div className="ButtonWrapper">
                <Button onClick={onLogout} className="btnStyle Btn560" type="primary" danger>Выйти</Button>
            </div>
        </div>
    )
}


export default Header;