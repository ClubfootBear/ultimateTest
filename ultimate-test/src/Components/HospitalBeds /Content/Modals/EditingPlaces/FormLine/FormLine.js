import React from "react"
import "./FormLine.css"

const FormLine = (props) => {
    return(
        <div className="FormLineWrapper">
            <div>{props.typePlaces}</div>
            <div className="FormLineInnerWrapper">
                <div>
                    <div>Всего</div>
                    <div><input className="IBStyle Input" type="text" placeholder={30}/></div>
                </div>
                <div>
                    <div>Занято</div>
                    <div><input className="IBStyle Input" type="text" placeholder={15}/></div>
                </div>
            </div>

        </div>
    )
}

export default FormLine;