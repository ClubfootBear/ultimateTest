import React, {useEffect} from "react"
import "./EditingPlaces.css"
import { Button } from 'antd';
import {CloseOutlined} from '@ant-design/icons';
import FormLine from "./FormLine/FormLine";
import {useHospital} from "../../../../../Context/HospitalContext";
import ModalCard from "../CommonModals/ModalCard/ModalCard";
import RadioGroup from "../CommonModals/RadioGroup/RadioGroup";
import DropDownModal from "../CommonModals/DropDownModal/DropDownModal";

const EditingPlaces = () => {
    const PlacesType = ['Мужские', 'Женские', 'Мужские с кислородом', 'Женские с кислородом']

    const { EditingPlacesSwitcher } = useHospital();

    return(
        <ModalCard value={{
            modalNameField: EditingPlacesSwitcher.modalNameField,
            toggleView: EditingPlacesSwitcher.toggleView,
        }}>

            {/*<div className="ModalWrap">*/}
                {/*<form className="EditingPlacesForm" action="#">*/}
                    {/*<div className="EditingHeaderForm">*/}
                    {/*    <div>Редактирование мест</div>*/}
                    {/*    <div><CloseOutlined onClick={EditingPlacesSwitcher.onCloseEditing}/></div>*/}
                    {/*</div>*/}
                    {/*<div className="HRStayle"/>*/}
                    <div className="EditingWrapper">
                        {PlacesType.map((p) => <FormLine typePlaces={p}/>)}
                    </div>
                    {/*<div className="EditingButtonWrapper">*/}
                    {/*    <Button onClick={EditingPlacesSwitcher.onCloseEditing} className="IBStyle Decline">Отмена</Button>*/}
                    {/*    <Button className="IBStyle Save" type="primary">Сохранить</Button>*/}
                    {/*</div>*/}
                {/*</form>*/}
            {/*</div>*/}

        </ModalCard>


    )
}

export default EditingPlaces;