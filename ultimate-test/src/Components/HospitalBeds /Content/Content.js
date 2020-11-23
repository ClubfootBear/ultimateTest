import React from "react";
import "./Content.css"
import StatusBlock from "./StatusBlock/StatusBlock";
import ButtonBlock from "./ButtonBlock/ButtonBlock";
import CardBlock from "./CardBlock/CardBlock";
import EditingPlaces from "./Modals/EditingPlaces/EditingPlaces";
import PatientsTransfer from "./Modals/PatientsTransfer/PatientsTransfer";
import PatientsDischarge from "./Modals/PatientsDischarge/PatientsDischarge";


const Content = () => {
    return(
        <div className="OuterWrapper" >
            <div className="ContentWrapper">
                <StatusBlock />
                <ButtonBlock />
                <CardBlock />
                //Пока ХЗ куда это пихать
                {/*<EditingPlaces />*/}
                {/*<PatientsTransfer />*/}
                <PatientsDischarge />

            </div>
        </div>
    )
}


export default Content;
