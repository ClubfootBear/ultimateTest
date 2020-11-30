import React, {useEffect, useState} from "react"
import "./EditingPlaces.css"
import {Button} from 'antd';
import {CloseOutlined} from '@ant-design/icons';
import FormLine from "./FormLine/FormLine";
import {useModal} from "../../../../../Context/ModalContext";
import ModalCard from "../CommonModals/ModalCard/ModalCard";
import RadioGroup from "../CommonModals/RadioGroup/RadioGroup";
import DropDownModal from "../CommonModals/DropDownModal/DropDownModal";
import {useHospital} from "../../../../../Context/HospitalContext";
import Card from "../../CardBlock/Card/Card";



const EditingPlaces = () => {


    const {EditingPlacesSwitcher} = useModal();
    const toggleView = EditingPlacesSwitcher.toggleView;
    const onSend = EditingPlacesSwitcher.onSend;
    const showModal = EditingPlacesSwitcher.showModal;


    const {card} = useHospital();
    const PlacesType = card.fieldNames;

    const expandFreePlaces = card.expandFreePlaces;
    const expandBookedPlaces = card.expandBookedPlaces;
    const expandTotalPlaces = card.expandTotalPlaces;
    const expandSex = card.expandSex;
    const expandOxygen = card.expandOxygen;
    const expandTypeFree = card.expandTypeFree;
    const expandTypeBooked = card.expandTypeBooked;

    // const {departmentsGroup} = useHospital();
    // const departmentId = departmentsGroup.department.id;
    // const getDepartment = departmentsGroup.getDepartment;


    return (
        <ModalCard value={{
            modalNameField: EditingPlacesSwitcher.modalNameField,
            toggleView: EditingPlacesSwitcher.toggleView,

        }}>
            <div className="EditingWrapper">
                {PlacesType.map((p) =>
                    <FormLine
                        key={p}
                        typePlaces={p}
                        FreePlaces={expandFreePlaces(p)}
                        BookedPlaces={expandBookedPlaces(p)}
                        TotalPlaces={expandTotalPlaces(p)}
                        Sex={expandSex(p)}
                        Oxygen={expandOxygen(p)}
                        TypeFree={expandTypeFree(p)}
                        TypeBooked={expandTypeBooked(p)}
                        ShowModal ={showModal}
                    />)}
            </div>
            <div className='LineBottom'/>
            <div className="ModalButton">
                <Button onClick={toggleView} className="IBStyle Decline">Отмена</Button>
                <Button onClick={onSend} className="IBStyle Save" type="primary">Сохранить</Button>
            </div>
        </ModalCard>


    )
}

export default EditingPlaces;