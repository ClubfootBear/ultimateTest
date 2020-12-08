import React, {useContext, useEffect, useState} from "react";
import "./Content.css"
import StatusBlock from "./StatusBlock/StatusBlock";
import ButtonBlock from "./ButtonBlock/ButtonBlock";
import CardBlock from "./CardBlock/CardBlock";
import EditingPlaces from "./Modals/EditingPlaces/EditingPlaces";
import PatientsTransfer from "./Modals/PatientsTransfer/PatientsTransfer";
import PatientsDischarge from "./Modals/PatientsDischarge/PatientsDischarge";
import {useModal} from "../../../Context/ModalContext";
import {LoginProvider} from "../../../Context/LoginContext";
import {ExpandProvider} from "../../../Context/Expand";


const Content = () => {
    const {DischargeSwitcher, EditingPlacesSwitcher, TransferSwitcher} = useModal();

    return (
        <ExpandProvider>
            <div className="OuterWrapper">
                <div className="ContentWrapper">
                    <StatusBlock/>
                    <ButtonBlock/>
                    {EditingPlacesSwitcher.showModal && <EditingPlaces/>}
                    {TransferSwitcher.showModal && <PatientsTransfer/>}
                    {DischargeSwitcher.showModal && <PatientsDischarge/>}
                    <CardBlock/>
                </div>
            </div>
        </ExpandProvider>
    )
}


export default Content;
