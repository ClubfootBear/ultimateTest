import React from "react";
import "./CardBlock.css"
import Card from "./Card/Card";


const CardBlock = () => {
    return(
        <div className="WrapperCardBlock">
            <div className="CardBlock">
                <div><Card/></div>
                <div><Card/></div>
                <div><Card/></div>
                <div><Card/></div>
            </div>
        </div>
    )
}


export default CardBlock;