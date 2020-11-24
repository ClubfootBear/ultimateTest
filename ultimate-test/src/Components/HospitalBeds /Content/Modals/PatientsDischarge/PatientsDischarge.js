import React, {useContext, useState} from "react"
import "./PatientsDischarge.css"
import {CloseOutlined} from "@ant-design/icons";
import {Button} from "antd";
import RadioGroup from "../CommonModals/RadioGroup/RadioGroup";
import {useHospital} from "../../../../../Context/HospitalContext";
import ModalCard from "../CommonModals/ModalCard/ModalCard";



const PatientsDischarge = (props) => {
    const PlacesType1 = ['Мужчина', 'Женщина', 'Мужчина с кислородом', 'Женщина с кислородом']

    const {DischargeSwitcher} = useHospital();
    // const FieldName = "Выписка пациентов"

    return(
        <ModalCard value={{
            modalNameField: DischargeSwitcher.modalNameField,
            toggleView: DischargeSwitcher.toggleView,
        }}>
                <div className="GroupMargin">
                    <div className="NameGroup">Выберите пациента для выписки</div>
                    <RadioGroup Array={PlacesType1}/>
                </div>
        </ModalCard>
    )
}

export default PatientsDischarge;