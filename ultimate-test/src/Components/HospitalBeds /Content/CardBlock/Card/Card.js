import React from "react";
import "./Card.css"


const Card = () => {
    return (
        <div className="ContentWrapperCard">
            <div className="Card">
                <div>BlockName</div>
                <div className="ActionButtonCard">
                    <div>Minus</div>
                    <div>Status/Button</div>
                    <div>Plus</div>
                </div>
                <div>
                    <div>Summory-1</div>
                    <div>Summory-2</div>
                </div>
            </div>
        </div>
    )
}


export default Card;