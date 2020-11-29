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

    const {departmentsGroup, hospitalGroup} = useHospital();
    const departmentId = departmentsGroup.department.id;
    const sex = props.Sex;
    const has_oxygen = props.Oxygen;

    const setHospitalAddition = hospitalGroup.setHospitalAddition;
    const onCollectAll = hospitalGroup.onCollectAll;

    const [free, setFree] = useState(props.FreePlaces);
    const [booked, setBooked] = useState(props.BookedPlaces);
    const [total, setTotal] = useState(booked + free);

    const typeFree = props.TypeFree;
    const typeBusy = props.TypeBooked;

    useEffect(() => {
        setFree(props.FreePlaces)
        setBooked(props.BookedPlaces)
        setTotal(props.FreePlaces + props.BookedPlaces)
    }, [props.FreePlaces])


    const toSend = (sign) => {
        let freeSend = free;
        let bookedSend = booked;

        if (sign === 'plus') {
            freeSend = free - 1;
            bookedSend = booked + 1
        } else {
            freeSend = free + 1;
            bookedSend = booked - 1
        }

        const cardData = {
            freeData: {typeFree, freeSend},
            busyData: {typeBusy, bookedSend},
            departmentId: departmentId,
        }

        return cardData;
    }

    // const cardData = {
    //     freeData: {typeFree, free},
    //     busyData: {typeBusy, booked},
    // }

    const onChangePlus = () => {
        if (booked === total) {
            return;
        } else {
            setBooked((prevState) => prevState + 1)
            setFree((prevState) => prevState - 1)
            setHospitalAddition(departmentId, booked, free, sex, has_oxygen)
            onCollectAll(toSend('plus'));
        }
    }

    const onChangeMinus = () => {
        if (free === total) {
            return;
        } else {
            setBooked((prevState) => prevState - 1)
            setFree((prevState) => prevState + 1)
            onCollectAll(toSend('minus'));
        }
    }

    const calcPercent = Math.round((booked / total) * 100);

    return (
        <div id="WrapperCard">
            <div className="Card">
                <div>
                    <h3>{props.cardFieldName}</h3>
                </div>
                <div className="ActionButtonCard">
                    <MinusCircleFilled onClick={onChangeMinus} style={{fontSize: '32px', color: '#0088cc'}}
                                       theme="outlined"/>
                    <div className="StatusButtonCard">
                        <div className="StatusBusy">
                            <p>Занято</p>
                        </div>
                        <div className="StatusCount">
                            <p>{booked}</p>
                        </div>
                    </div>
                    <PlusCircleFilled onClick={onChangePlus} style={{fontSize: '32px', color: '#08c'}}
                                      theme="outlined"/>
                </div>
                <div className={!isEdit & !isTransfer & !isDischarge ? "Progress" : "Hidden"}>
                    <Progress percent={calcPercent} showInfo={false} style={{paddingRight: '25px'}}/>
                    <p>{calcPercent}%</p>
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