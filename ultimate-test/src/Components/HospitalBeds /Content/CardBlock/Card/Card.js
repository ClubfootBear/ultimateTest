import React, {useEffect} from "react";
import "./Card.css"
import { MinusCircleFilled, PlusCircleFilled } from '@ant-design/icons';
import { Progress } from 'antd';


const Card = (props) => {

    const calcPercent = Math.round(( props.BookedPlaces / props.TotalPlaces ) * 100);

    // useEffect(() => {props.BookedPlaces})

    return (
        <div id="WrapperCard">
                <div className="Card">
                    <div>
                        <h3>{props.cardFieldName}</h3>
                    </div>
                    <div className="ActionButtonCard">
                        <MinusCircleFilled onClick={props.MinusPlaces}  style={{fontSize: '32px', color: '#0088cc'}} theme="outlined"/>
                        <div className="StatusButtonCard">
                            <div className="StatusBusy">
                                <p>Занято</p>
                            </div>
                            <div className="StatusCount">
                                <p>{props.BookedPlaces}</p>
                            </div>
                        </div>
                        <PlusCircleFilled onClick={props.PlusPlaces} style={{fontSize: '32px', color: '#08c'}} theme="outlined"/>
                    </div>
                    <div className="Progress">
                        <Progress percent={calcPercent} showInfo={false} style={{paddingRight: '25px'}}/>
                        <p>{calcPercent}%</p>
                    </div>
                    <div className="TotalStatus">
                        <div>Свободно <span>{props.FreePlaces}</span></div>
                        <div>Всего <span>{props.TotalPlaces}</span></div>
                    </div>
                </div>
        </div>
    )
}


export default Card;