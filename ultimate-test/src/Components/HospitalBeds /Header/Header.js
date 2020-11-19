import React from "react";
import "./Header.css"
import Organization from "../../LoginPage/Orzanization/Orzanization";
import {Button} from "antd";


const Header = () => {
    return(
        <div className="HeaderWrapper">
            <div className="OrganizationWrapper">
                <Organization />
            </div>
            <div className="ButtonWrapper">
                <Button className="btnStyle" type="primary" danger>Button</Button>
            </div>
        </div>
    )
}


export default Header;