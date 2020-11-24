import React, {useEffect} from "react"
import "./EditingPlaces.css"
import { Button } from 'antd';
import {CloseOutlined} from '@ant-design/icons';
import FormLine from "./FormLine/FormLine";
import {useHospital} from "../../../../../Context/HospitalContext";

const EditingPlaces = () => {
    const PlacesType = ['Мужские', 'Женские', 'Мужские с кислородом', 'Женские с кислородом']

    const { EditingPlacesSwitcher } = useHospital();

    return(
        <div className="ModalWrap">
            <form className="EditingPlacesForm" action="#">
                <div className="EditingHeaderForm">
                    <div>Редактирование мест</div>
                    <div><CloseOutlined onClick={EditingPlacesSwitcher.onCloseEditing}/></div>
                </div>
                <div className="HRStayle"/>
                <div className="EditingContent">
                    {PlacesType.map((p) => <FormLine typePlaces={p}/>)}
                </div>
                <div className="EditingButtonWrapper">
                    <Button onClick={EditingPlacesSwitcher.onCloseEditing} className="IBStyle Decline">Отмена</Button>
                    <Button className="IBStyle Save" type="primary">Сохранить</Button>
                </div>
            </form>
        </div>
    )
}

export default EditingPlaces;