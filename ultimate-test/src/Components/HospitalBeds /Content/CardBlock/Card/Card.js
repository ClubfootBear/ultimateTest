import React from "react";
import "./Card.css"
import { MinusCircleFilled, PlusCircleFilled } from '@ant-design/icons';
import { Progress } from 'antd';


const Card = () => {
    return (
        <div id="WrapperCard">
                <div className="Card">
                    <div>
                        <h3>BlockName</h3>
                    </div>
                    <div className="ActionButtonCard">
                        <MinusCircleFilled style={{fontSize: '32px', color: '#0088cc'}} theme="outlined"/>
                        <div className="StatusButtonCard">
                            <div className="StatusBusy">
                                <p>Занято</p>
                            </div>
                            <div className="StatusCount">
                                <p>15</p>
                            </div>
                        </div>
                        <PlusCircleFilled style={{fontSize: '32px', color: '#08c'}} theme="outlined"/>
                    </div>
                    <div className="Progress">
                        <Progress percent={85} showInfo={false} style={{paddingRight: '25px'}}/>
                        <p>85%</p>
                    </div>
                    <div className="TotalStatus">
                        <div>Свободно <span>15</span></div>
                        <div>Всего <span>30</span></div>
                    </div>
                </div>
        </div>
    )
}


export default Card;