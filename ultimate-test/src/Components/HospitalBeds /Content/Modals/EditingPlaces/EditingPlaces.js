import React, {useEffect} from "react"
import "./EditingPlaces.css"
import {Button} from 'antd';
import {CloseOutlined} from '@ant-design/icons';
import FormLine from "./FormLine/FormLine";
import {useModal} from "../../../../../Context/ModalContext";
import ModalCard from "../CommonModals/ModalCard/ModalCard";
import RadioGroup from "../CommonModals/RadioGroup/RadioGroup";
import DropDownModal from "../CommonModals/DropDownModal/DropDownModal";

const EditingPlaces = () => {
    const PlacesType = ['Мужские', 'Женские', 'Мужские с кислородом', 'Женские с кислородом']

    const {EditingPlacesSwitcher} = useModal();

    return (
        <ModalCard value={{
            modalNameField: EditingPlacesSwitcher.modalNameField,
            toggleView: EditingPlacesSwitcher.toggleView,
        }}>
            <div className="EditingWrapper">
                {PlacesType.map((p) => <FormLine typePlaces={p}/>)}
            </div>
        </ModalCard>


    )
}

export default EditingPlaces;