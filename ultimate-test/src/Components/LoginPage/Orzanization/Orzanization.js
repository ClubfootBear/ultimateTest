import React from "react"
import tyumenLogo from "./static/tyumenLogo.png"
import "./Orzanization.css"

const Organization = () => {
    return (
        <div className="organizationInfo">
            <div className="tyumenLogo">
                <img src={tyumenLogo} alt=""/>
            </div>
            <div className="organizationText">
                <div><p className="organizationTitle">Информационная система “Коечный фонд - бронирование”</p></div>
                <div><p className="signature">Департамент информатизации Тюменской области</p></div>
            </div>
        </div>
    )
}


export default Organization;