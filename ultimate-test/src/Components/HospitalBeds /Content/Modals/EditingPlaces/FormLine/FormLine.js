import React from "react"
import "./FormLine.css"

const FormLine = (props) => {
    return(
        <div className="FormLineWrapper">
            <div className="PlaceType">{props.typePlaces}</div>
            <div className="FormLineInnerWrapper">
                <div>
                    <div className="PlaceStyle">Всего</div>
                    <div><input className="IBStyle Input InputType" type="text" placeholder={30}/></div>
                </div>
                <div>
                    <div className="PlaceStyle">Занято</div>
                    <div><input className="IBStyle Input InputType" type="text" placeholder={15}/></div>
                </div>
            </div>

        </div>
    )
}

export default FormLine;