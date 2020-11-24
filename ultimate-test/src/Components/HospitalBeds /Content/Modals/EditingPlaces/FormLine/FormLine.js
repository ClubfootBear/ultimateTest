import React from "react"
import "./FormLine.css"
import { Input } from 'antd';

const FormLine = (props) => {
    return(
        <div className="FormLineWrapper">
            <div className="PlaceType">{props.typePlaces}</div>
            <div className="FormLineInnerWrapper">
                <div>
                    <div className="PlaceStyle">Всего</div>
                    <input className="IBStyle Input InputType" type="text" placeholder={30}/>
                </div>
                <div>
                    <div className="PlaceStyle">Занято</div>
                    <input className="IBStyle Input InputType" type="text" placeholder={15}/>
                    {/*<Input className="IBStyle Input InputType" placeholder="Basic usage" placeholder={15} />*/}
                </div>
            </div>
        </div>
    )
}

export default FormLine;