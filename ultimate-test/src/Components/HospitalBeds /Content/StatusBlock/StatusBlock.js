import React from "react";
import "./StatusBlock.css"
import {Dropdown} from "antd";
import {AimOutlined, DownOutlined} from "@ant-design/icons";
import {menu} from "./DepartmentsDropDown/DepartmentsDropDown";

const StatusBlock = () => {




    return (
        <div className="StatusBlock">
            <div className="HeaderStatusBlock">
                <div className="SummaryInformation">
                    <div className="DepartmentDropDown">
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Стационарное Отделение <DownOutlined/>
                            </a>
                        </Dropdown>
                    </div>
                    <div className="HospitalBeds">
                        <p>Места в стационаре</p>
                    </div>
                    <div className="TotalStatusTags">
                        <div className="Free">Свободно <span>60</span></div>
                        <div className="Busy">Занято <span>60</span></div>
                        <div className="Total">Всего <span>120</span></div>
                    </div>
                </div>
                <div className="HospitalPosition">
                    <div><AimOutlined style={{marginRight: '9px'}}/>ГБУЗ ТО «Госпиталь для ветеранов войн» - Котовского, 55/2</div>
                </div>
            </div>
        </div>

    )
}

export default StatusBlock;
