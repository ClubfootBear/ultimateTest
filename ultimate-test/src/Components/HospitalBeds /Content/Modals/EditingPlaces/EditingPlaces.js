import React from "react"
import "./EditingPlaces.css"
import { Button } from 'antd';
import FormLine from "./FormLine/FormLine";

const EditingPlaces = () => {
    const PlacesType = ['Мужские', 'Женские', 'Мужские с кислородом', 'Женские с кислородом']


    return(
            <form className="EditingPlacesForm" action="#">
                <div className="EditingHeaderForm">
                    <div>Редактирование мест</div>
                    <div>Х</div>
                </div>
                <div className="EditingContent">
                    { PlacesType.map( (p) => <FormLine typePlaces={p} />)}
                </div>
                <div className="EditingButtonWrapper">
                    <Button className="IBStyle">Отмена</Button>
                    <Button className="IBStyle" type="primary">Сохранить</Button>
                </div>
            </form>
    )
}

export default EditingPlaces;