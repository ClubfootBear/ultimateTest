import React, {useEffect} from "react";
import "./CardBlock.css"
import Card from "./Card/Card";
import {useHospital} from "../../../../Context/HospitalContext";
import {loginContext} from "../../../../Context/LoginContext";
import {getLocal} from "../../../../Context/FormatForApi";
import {useExpand} from "../../../../Context/Expand";


const CardBlock = () => {
    const {setHospitalAddition, departmentsGroup, card} = useHospital();
    const {expand} = useExpand();


    ///BigQuestion!!!
    const departmentId = departmentsGroup.department.id;

    const onChangePlus = card.onChangePlus;
    const onChangeMinus = card.onChangeMinus;

    // debugger
    const fieldNames = expand.fieldNames;

    const expandFreePlaces = expand.freePlaces;
    const expandBookedPlaces = expand.bookedPlaces;
    const expandTotalPlaces = expand.totalPlaces;

    const expandSex = expand.sex;
    const expandOxygen = expand.oxygen;
    const expandTypeFree = expand.typeFree;
    const expandTypeBooked = expand.typeBooked;

    return (
        <div className="WrapperCardBlock">
                <div className='CardBlock'>
                    {fieldNames.map(f =>
                        <Card key={f}
                              cardFieldName={f}

                              freePlaces={expandFreePlaces(f)}
                              bookedPlaces={expandBookedPlaces(f)}
                              totalPlaces={expandTotalPlaces(f)}

                              sex={expandSex(f)}
                              oxygen={expandOxygen(f)}

                              // typeFree={expandTypeFree(f)}
                              // typeBooked={expandTypeBooked(f)}

                              onChangePlus={onChangePlus}
                              onChangeMinus={onChangeMinus}
                              departmentId={departmentId}

                        />
                    )}
            </div>
        </div>
    )
}


export default CardBlock;