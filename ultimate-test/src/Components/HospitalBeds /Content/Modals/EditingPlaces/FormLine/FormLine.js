import React, {useEffect, useReducer, useState} from "react"
import "./FormLine.css"
import {Button, Input} from 'antd';
import {useHospital} from "../../../../../../Context/HospitalContext";

const FormLine = (props) => {
    const total = props.totalPlaces;
    const booked = props.bookedPlaces;
    const free = props.freePlaces;

    const sex = props.sex;
    const oxygen = props.oxygen;


    const depId = props.departmentId;

    const onInputBooked = props.onInputBooked;
    const onInputTotal = props.onInputTotal;

    // const [booked, setBooked] = useState(props.BookedPlaces);
    // const [total, setTotal] = useState(props.TotalPlaces);
    // const [free, setFree] = useState(total - booked);


    // const getDepartment = departmentsGroup.getDepartment;
    // const department = departmentsGroup.department;


    // const typeFree = props.TypeFree;
    // const typeBusy = props.TypeBooked;


    // const setModalObject = (obj) => {
    //
    //     obj = {
    //         depId,
    //
    //         total,
    //         free,
    //         booked,
    //         sex,
    //         oxygen,
    //     }
    //     return modalObject;
    // }

    const modalObject = {
        depId,

        total,
        free,
        booked,
        sex,
        oxygen,
    }



    return (
        <div className="FormLineWrapper">
            <div className="PlaceType">{props.typePlaces}</div>
            <div className="FormLineInnerWrapper">
                <div>
                    <div className="PlaceStyle">Всего</div>
                    <input onChange={(event) => onInputTotal(event, modalObject)} className="IBStyle Input InputType" type="text" placeholder={total}/>
                </div>
                <div>
                    <div className="PlaceStyle">Занято</div>
                    <input onChange={(event) => onInputBooked(event, modalObject)} className="IBStyle Input InputType" type="text"
                           placeholder={booked}/>
                </div>
            </div>
        </div>
    )
}

export default FormLine;

// getDepartment(departmentId);

// useEffect(() => {
//     setFree(props.FreePlaces)
//     setBooked(props.BookedPlaces)
//     setTotal(props.FreePlaces + props.BookedPlaces)
//     // getDepartment(departmentId)
//     console.log('Kalabanga')
// }, [])
//
// const isNumber = (value) => {
//     let intVal = Number(value)
//     let result = isNaN(intVal) ? false : true
//     return result
// };
//
// const toSend = () => {
//     let freeSend = free;
//     let bookedSend = booked;
//
//     const cardData = {
//         freeData: {typeFree, freeSend},
//         busyData: {typeBusy, bookedSend},
//         departmentId: departmentId,
//     }
//     return cardData;
// }