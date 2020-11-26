import React from "react";
import "./Header.css"
import Organization from "../../LoginPage/Orzanization/Orzanization";
import {Button} from "antd";
import Api from "../../Api/ApiQueries";


const Header = () => {

    return(
        <div className="HeaderWrapper">
            <div className="OrganizationWrapper">
                <Organization />
                <Api />
            </div>
            <div className="ButtonWrapper">
                <Button className="btnStyle Btn560" type="primary" danger>Выйти</Button>
            </div>
        </div>
    )
}


export default Header;