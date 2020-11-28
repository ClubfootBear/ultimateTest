import React from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
import "./HospitalBeds.css"
import {ModalProvider} from "../../Context/ModalContext";
import {HospitalProvider} from "../../Context/HospitalContext";

const HospitalBeds = () => {
    return (
        <div className="HospitalBedsWrapper">
            <HospitalProvider>
                <ModalProvider>
                    <Header/>
                    <Content/>
                </ModalProvider>
            </HospitalProvider>
        </div>

    )
}

export default HospitalBeds;
