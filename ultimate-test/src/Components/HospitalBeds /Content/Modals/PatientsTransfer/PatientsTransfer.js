import React from "react"
import "./PatientsTransfer.css"
import {CloseOutlined} from "@ant-design/icons";
import {Button} from "antd";
import RadioGroup from "../CommonModals/RadioGroup/RadioGroup";
import DropDownModal from "../CommonModals/DropDownModal/DropDownModal";
import {useModal} from "../../../../../Context/ModalContext";
import ModalCard from "../CommonModals/ModalCard/ModalCard";

const PatientsTransfer = () => {
    const {TransferSwitcher} = useModal();


    const PlacesType1 = ['Мужчина', 'Женщина', 'Мужчина с кислородом', 'Женщина с кислородом']
    const PlacesType2 = ['Мужские', 'Женские', 'Мужские с кислородом', 'Женские с кислородом']

    return (
        <ModalCard value={{
            modalNameField: TransferSwitcher.modalNameField,
            toggleView: TransferSwitcher.toggleView,
        }}>
            <div className="GroupMargin">
                <div className="NameGroup">Выберите пациента в вашем отделении</div>
                <RadioGroup Array={PlacesType1}/>
            </div>
            <div className="NameGroupWrapper">
                <div className="NameGroup">В какое отделение переводить?</div>
                <DropDownModal/>
            </div>
            <div className="GroupMargin">
                <div className="NameGroup">Доступные места в выбранном отделении</div>
                <RadioGroup Array={PlacesType2}/>
            </div>
        </ModalCard>
    )
}

export default PatientsTransfer;