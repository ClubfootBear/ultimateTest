import React, {useEffect, useReducer, useState} from "react"
import "./FormLine.css"
import {Button, Input} from 'antd';
import {useHospital} from "../../../../../../Context/HospitalContext";

const FormLine = (props) => {




    const {departmentsGroup, hospitalGroup} = useHospital();
    const departmentId = departmentsGroup.department.id;
    const getDepartment = departmentsGroup.getDepartment;
    // const department = departmentsGroup.department;
    const sex = props.Sex;
    const has_oxygen = props.Oxygen;


    const [booked, setBooked] = useState(props.BookedPlaces);
    const [total, setTotal] = useState(props.TotalPlaces);
    const [free, setFree] = useState(total - booked);

    const typeFree = props.TypeFree;
    const typeBusy = props.TypeBooked;

    // getDepartment(departmentId);

    useEffect(() => {
        setFree(props.FreePlaces)
        setBooked(props.BookedPlaces)
        setTotal(props.FreePlaces + props.BookedPlaces)
        // getDepartment(departmentId)
        console.log('Kalabanga')
    }, [])

    const isNumber = (value) => {
        let intVal = Number(value)
        let result = isNaN(intVal) ? false : true
        return result
    };

    const toSend = () => {
        let freeSend = free;
        let bookedSend = booked;

        const cardData = {
            freeData: {typeFree, freeSend},
            busyData: {typeBusy, bookedSend},
            departmentId: departmentId,
        }
        return cardData;
    }


    const onInputBooked = (e) => {
        let inputValue = e.target.value;
        // console.log(v)
        isNumber(inputValue) ? console.log(toSend()) : setBooked(booked)
    }

    const onInputTotal = (e) => {
        let inputValue = e.target.value;
        // console.log(v)
        isNumber(inputValue) ? console.log(inputValue) : setTotal(total)
        // setTotal(total)
    }

    return(
        <div className="FormLineWrapper">
            <div className="PlaceType">{props.typePlaces}</div>
            <div className="FormLineInnerWrapper">
                <div>
                    <div className="PlaceStyle">Всего</div>
                    <input onChange={onInputTotal} className="IBStyle Input InputType" type="text" placeholder={total}/>
                </div>
                <div>
                    <div className="PlaceStyle">Занято</div>
                    <input onChange={onInputBooked} className="IBStyle Input InputType" type="text" placeholder={booked}/>
                </div>
            </div>
        </div>
    )
}

export default FormLine;