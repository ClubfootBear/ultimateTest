import React from "react";
import "./Header.css"
import Organization from "../../LoginPage/Orzanization/Orzanization";
import {Button} from "antd";
import axios from "axios";


const data = JSON.stringify({username: 'Test_ultra_task', password: 'T54321oikb'})
const api = axios.create({
    // method: 'POST',
    // rossDomain: true,
    withCredentials: true,
    headers: {'Content-Type': 'application/json', Authorization: 'Basic Og=='},
    baseURL: 'https://kbapi-test.oits.su/',
    // data: {username: 'Test_ultra_task', password: 'T54321oikb'}
})

const Header = () => {
    console.log('There axios >>')
    api.post('api/users/token/', data).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });


    return(
        <div className="HeaderWrapper">
            <div className="OrganizationWrapper">
                <Organization />
            </div>
            <div className="ButtonWrapper">
                <Button className="btnStyle Btn560" type="primary" danger>Выйти</Button>
            </div>
        </div>
    )
}


export default Header;