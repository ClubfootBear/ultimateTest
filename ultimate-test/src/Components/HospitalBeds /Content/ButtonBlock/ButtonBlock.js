import React from "react";
import { Button } from 'antd';

import "./ButtonBlock.css"


const ButtonBlock = () => {
    return(
        <div className="ButtonWrapperBlock">
            <div className="ButtonBlock">
                {/*<div className="Plug"></div>*/}
                <div className="ButtonInnerWrapper">
                    <Button className="ActionButton" type="primary">Primary Button</Button>
                    <Button className="ActionButton">Default Button</Button>
                    <Button className="ActionButton">Default Button</Button>
                    <Button className="ActionButton">Default Button</Button>
                </div>
                {/*<div className="Plug"></div>*/}
            </div>
        </div>
    )
}


export default ButtonBlock;
