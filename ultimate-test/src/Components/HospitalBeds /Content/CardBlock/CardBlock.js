import React, {useEffect} from "react";
import "./CardBlock.css"
import Card from "./Card/Card";
import {useHospital} from "../../../../Context/HospitalContext";
import {loginContext} from "../../../../Context/LoginContext";
import {getLocal} from "../../../../Context/FormatForApi";


const CardBlock = () => {
    const {setHospitalAddition, departmentsGroup} = useHospital();

    const departmentId = departmentsGroup.department.id;
    const {card} = useHospital();

    // debugger
    const fieldNames = card.fieldNames;

    const expandFreePlaces = card.expandFreePlaces;
    const expandBookedPlaces = card.expandBookedPlaces;
    const expandTotalPlaces = card.expandTotalPlaces;
    const expandSex = card.expandSex;
    const expandOxygen = card.expandOxygen;
    const expandTypeFree = card.expandTypeFree;
    const expandTypeBooked = card.expandTypeBooked;

    return (
        <div className="WrapperCardBlock">
            <div className="CardBlock">
                <div>
                    {fieldNames.map(f =>
                        <Card key={f}
                              cardFieldName={f}
                              FreePlaces={expandFreePlaces(f)}
                              BookedPlaces={expandBookedPlaces(f)}
                              TotalPlaces={expandTotalPlaces(f)}
                              Sex={expandSex(f)}
                              Oxygen={expandOxygen(f)}
                              TypeFree={expandTypeFree(f)}
                              TypeBooked={expandTypeBooked(f)}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}


export default CardBlock;