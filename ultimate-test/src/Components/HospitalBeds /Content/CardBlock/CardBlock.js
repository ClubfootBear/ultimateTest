import React from "react";
import "./CardBlock.css"
import Card from "./Card/Card";
import {useHospital} from "../../../../Context/HospitalContext";


const CardBlock = () => {

    const {MensCard} = useHospital();

    // console.log("MensCard is " + MensCard.cardFieldName)

    return (
        <div className="WrapperCardBlock">
            <div className="CardBlock">
                <div>
                    <Card
                        cardFieldName = {MensCard.cardFieldName}
                        FreePlaces = {MensCard.FreePlaces}
                        BookedPlaces = {MensCard.BookedPlaces}
                        TotalPlaces = {MensCard.TotalPlaces}
                        PlusPlaces = {MensCard.plusPlaces}
                        MinusPlaces = {MensCard.MinusPlaces}
                    />
                </div>
                <div><Card/></div>
                <div><Card/></div>
                <div><Card/></div>
            </div>
        </div>
    )
}


export default CardBlock;