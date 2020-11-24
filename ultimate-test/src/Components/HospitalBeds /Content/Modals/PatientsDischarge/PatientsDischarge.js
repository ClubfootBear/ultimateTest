import React, {useContext, useState} from "react"
import "./PatientsDischarge.css"
import {CloseOutlined} from "@ant-design/icons";
import {Button} from "antd";
import RadioGroup from "../CommonModals/RadioGroup/RadioGroup";
import DropDownModal from "../CommonModals/DropDownModal/DropDownModal";
import {HospitalContext, useHospital} from "../../../../../Context/HospitalContext";



const PatientsDischarge = (props) => {
    const PlacesType1 = ['Мужчина', 'Женщина', 'Мужчина с кислородом', 'Женщина с кислородом']

    const {DischargeSwitcher} = useHospital();

    return(
        <div className="ModalWrap">
            <form className="DischargePlacesForm" action="#">
                <div className="DischargeHeaderForm">
                    <div>Выписка пациентов</div>
                    <div><CloseOutlined onClick={DischargeSwitcher.onCloseDischarge}/></div>
                </div>
                <div className='HRStayleTop'/>
                <div className="GroupMargin">
                    <div className="NameGroup">Выберите пациента в вашем отделении</div>
                    <RadioGroup Array={PlacesType1}/>
                </div>
                <div className='HRStayleBottom'/>
                <div className="DischargeButtonWrapper">
                    <Button onClick={DischargeSwitcher.onCloseDischarge} className="IBStyle Decline">Отмена</Button>
                    <Button className="IBStyle Save" type="primary">Сохранить</Button>
                </div>
            </form>
        </div>
    )
}

export default PatientsDischarge;