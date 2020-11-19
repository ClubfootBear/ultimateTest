import React from "react";
import "./StatusBlock.css"

const StatusBlock = () => {
    return (
        <div className="StatusBlock">
            <div className="HeaderStatusBlock">
                <div className="SummaryInformation">
                    <div>Стационарное Отделение</div>
                    <div>Места в стационаре</div>
                    <div>Свободно/Занято</div>
                </div>
                <div className="HospitalPosition">
                    <div>АдрессГоспиталя</div>
                </div>
            </div>
        </div>

    )
}

export default StatusBlock;
