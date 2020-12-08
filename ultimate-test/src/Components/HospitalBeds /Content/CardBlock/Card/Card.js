import React, {useEffect, useState} from "react";
import "./Card.css"
import {MinusCircleFilled, PlusCircleFilled} from '@ant-design/icons';
import {Progress} from 'antd';
import {useModal} from "../../../../../Context/ModalContext";
import {useHospital} from "../../../../../Context/HospitalContext";


const Card = (props) => {

    const {DischargeSwitcher, EditingPlacesSwitcher, TransferSwitcher} = useModal();
    const isEdit = EditingPlacesSwitcher.showModal;
    const isTransfer = TransferSwitcher.showModal;
    const isDischarge = DischargeSwitcher.showModal;

    const cardFieldName = props.cardFieldName;
    const depId = props.departmentId;

    const total = props.totalPlaces;
    const free = props.freePlaces;
    const booked = props.bookedPlaces;

    const sex = props.sex;
    const oxygen = props.oxygen;

    const onChangeMinus = props.onChangeMinus;
    const onChangePlus = props.onChangePlus;


    const placeObject = {
        depId,

        total,
        free,
        booked,
        sex,
        oxygen,
    }


    const calcPercent = Math.round((booked / total) * 100);

    return (
        <div id="WrapperCard">
            <div className="Card">
                <div>
                    <h3>{cardFieldName}</h3>
                </div>
                <div className="ActionButtonCard">
                    <MinusCircleFilled onClick={() => onChangeMinus(placeObject)}
                                       style={{fontSize: '32px', color: '#0088cc'}}
                                       theme="outlined"/>
                    <div className="StatusButtonCard">
                        <div className="StatusBusy">
                            <p>Занято</p>
                        </div>
                        <div className="StatusCount">
                            <p>{booked}</p>
                        </div>
                    </div>
                    <PlusCircleFilled onClick={() => onChangePlus(placeObject)}
                                      style={{fontSize: '32px', color: '#08c'}}
                                      theme="outlined"/>
                </div>
                <div>
                    <div className={!isEdit & !isTransfer & !isDischarge ? "Progress" : "Hidden"}>
                        <Progress percent={calcPercent} showInfo={false} style={{paddingRight: '25px'}}/>
                        <p>{calcPercent}%</p>
                    </div>
                </div>
                <div className="TotalStatus">
                    <div>Свободно <span>{free}</span></div>
                    <div>Всего <span>{total}</span></div>
                </div>
            </div>
        </div>
    )
}


export default Card;

// const {departmentsGroup, hospitalGroup, card} = useHospital();

// const onChangePlus = card.onChangePlus;
// const onChangeMinus = card.onChangeMinus;

// const addPlaces = card.addPlaces;
// const removePlaces = card.removePlaces;

// const departmentId = departmentsGroup.department.id;
// const sex = props.Sex;
// const has_oxygen = props.Oxygen;

// const setHospitalAddition = hospitalGroup.setHospitalAddition;
// const onCollectAll = hospitalGroup.onCollectAll;

// const [free, setFree] = useState(props.FreePlaces);
// const [booked, setBooked] = useState(props.BookedPlaces);

// const [free, setFree] = useState(30);
// const [booked, setBooked] = useState(10);
// const [total, setTotal] = useState(booked + free);

// const typeFree = props.TypeFree;
// const typeBusy = props.TypeBooked;

// useEffect(() => {
//     setFree(props.FreePlaces)
//     setBooked(props.BookedPlaces)
//     setTotal(props.FreePlaces + props.BookedPlaces)
// }, [props.FreePlaces])


// const toSend = (sign) => {
//     let freeSend = free;
//     let bookedSend = booked;
//
//     if (sign === 'plus') {
//         freeSend = free - 1;
//         bookedSend = booked + 1
//     } else {
//         freeSend = free + 1;
//         bookedSend = booked - 1
//     }
//
//     const cardData = {
//         freeData: {typeFree, freeSend},
//         busyData: {typeBusy, bookedSend},
//         departmentId: departmentId,
//     }
//
//     return cardData;
// }

// const onChangePlus = (booked, total, departmentId) => {
//     console.log('Click')
//     if (booked === total) {
//         return;
//     } else {
//         // setBooked((prevState) => prevState + 1)
//         // setFree((prevState) => prevState - 1)
//         // setHospitalAddition(departmentId, booked, free, sex, has_oxygen)
//         // onCollectAll(toSend('plus'));
//         // addPlaces(departmentId)
//     }
// }

// const onChangeMinus = (free, total, departmentId) => {
//     console.log('Click')
//     if (free === total) {
//         return;
//     } else {
//         // setBooked((prevState) => prevState - 1)
//         // setFree((prevState) => prevState + 1)
//         // onCollectAll(toSend('minus'));
//         // removePlaces(departmentId)
//     }
// }