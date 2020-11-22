import React from "react"
import "./PatientsTransfer.css"
import {CloseOutlined} from "@ant-design/icons";
import FormLine from "../EditingPlaces/FormLine/FormLine";
import {Button} from "antd";
import RadioGroup from "../CommonModals/RadioGroup/RadioGroup";
import DropDownModal from "../CommonModals/DropDownModal/DropDownModal";

const PatientsTransfer = () => {

    const PlacesType1 = ['Мужчина', 'Женщина', 'Мужчина с кислородом', 'Женщина с кислородом']
    const PlacesType2 = ['Мужские', 'Женские', 'Мужские с кислородом', 'Женские с кислородом']

    return(
        <div className="ModalWrap">
            <form className="EditingPlacesForm" action="#">
                <div className="EditingHeaderForm">
                    <div>Перевод пациентов</div>
                    <div><CloseOutlined /></div>
                </div>
                <div className="GroupMargin">
                    <div className="NameGroup">Выберите пациента в вашем отделении</div>
                    <RadioGroup Array={PlacesType1}/>
                </div>
                <div className="GroupMargin">
                    <div className="NameGroup">В какое отделение переводить?</div>
                    <DropDownModal className="DropDownWrapper" />
                </div>
                <div className="GroupMargin">
                    <div className="NameGroup">Доступные места в выбранном отделении</div>
                    <RadioGroup Array={PlacesType2}/>
                </div>
                <div className="TransferButtonWrapper">
                    <Button className="IBStyle Decline">Отмена</Button>
                    <Button className="IBStyle Save" type="primary">Сохранить</Button>
                </div>
            </form>
        </div>
    )
}

export default PatientsTransfer;