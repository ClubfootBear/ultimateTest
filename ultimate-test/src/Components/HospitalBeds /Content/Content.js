import React from "react";
import "./Content.css"
import StatusBlock from "./StatusBlock/StatusBlock";
import ButtonBlock from "./ButtonBlock/ButtonBlock";
import CardBlock from "./CardBlock/CardBlock";


const Content = () => {
    return(
        <div className="OuterWrapper">
            <div className="ContentWrapper">
                <StatusBlock />
                <ButtonBlock />
                <CardBlock />
            </div>
        </div>
    )
}


export default Content;
