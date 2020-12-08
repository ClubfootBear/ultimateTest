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
import {useExpand} from "../../../../../Context/Expand";



const EditingPlaces = () => {
    const {departmentsGroup} = useHospital();
    const department = departmentsGroup.department
    const departmentId = department.id;

    const {EditingPlacesSwitcher} = useModal();
    const toggleView = EditingPlacesSwitcher.toggleView;

    const onSend = EditingPlacesSwitcher.onSend;
    const showModal = EditingPlacesSwitcher.showModal;




    const {expand} = useExpand();
    const fieldNames = expand.fieldNames;

    const expandFreePlaces = expand.freePlaces;
    const expandBookedPlaces = expand.bookedPlaces;
    const expandTotalPlaces = expand.totalPlaces;

    const expandSex = expand.sex;
    const expandOxygen = expand.oxygen;

    const combineObject = (department, object) => {
        // const chosenDep = state.hospitalData.filter(d => d.id === object.depId);

        // const chosenDep = state.hospitalData.filter(d => d.id === object.depId);

        // const departmentIndex = state.hospitalData.findIndex(d=> d.id === object.depId)
        // console.log('departmentIndex')
        // console.log(departmentIndex)
        // debugger
        // const newDepartmentData = [...department]
        const newDepartmentData = JSON.parse(JSON.stringify(department));
        const oxygen = object.oxygen;
        const sex = object.sex;

        switch (sex) {
            case 'MALE': {
                if (!oxygen) {
                    newDepartmentData.count_male_free = object.total - object.booked;
                    newDepartmentData.count_male_busy = object.booked;
                    return {newDepartmentData};
                } else {
                    newDepartmentData.count_male_o2_free = object.total - object.booked;
                    newDepartmentData.count_male_o2_busy = object.booked;
                    return {newDepartmentData};
                }
            }
                case 'FEMALE': {
                    if (!oxygen) {
                        newDepartmentData.count_female_free = object.total - object.booked;
                        newDepartmentData.count_female_busy = object.booked;
                return {newDepartmentData};
                    } else {
                        newDepartmentData.count_female_o2_free = object.total - object.booked;
                        newDepartmentData.count_female_o2_busy = object.booked;
                return {newDepartmentData};
                    }
                }
            }
        }



    const onInputBooked = (e, modalObject) => {

        const newBooked = Number(e.target.value);
        modalObject.booked = newBooked;

        const objToSend = combineObject(department, modalObject)
        console.log('objToSend')
        console.log(objToSend)
    }


    const onInputTotal = (e, modalObject) => {
        const newTotal = Number(e.target.value);
        modalObject.total = newTotal;

        const objToSend = combineObject(department, modalObject)
        console.log('objToSend')
        console.log(objToSend)
    }






    return (
        <ModalCard value={{
            modalNameField: EditingPlacesSwitcher.modalNameField,
            toggleView: EditingPlacesSwitcher.toggleView,

        }}>
            <div className="EditingWrapper">
                {fieldNames.map((p) =>
                    <FormLine
                        key={p}

                        typePlaces={p}
                        freePlaces={expandFreePlaces(p)}
                        bookedPlaces={expandBookedPlaces(p)}
                        totalPlaces={expandTotalPlaces(p)}

                        sex={expandSex(p)}
                        oxygen={expandOxygen(p)}

                        ShowModal ={showModal}

                        onInputBooked = {onInputBooked}
                        onInputTotal = {onInputTotal}

                        departmentId={departmentId}
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