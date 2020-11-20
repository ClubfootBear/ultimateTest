import React from "react";
import "./StatusBlock.css"
import {Dropdown} from "antd";
import {DownOutlined} from "@ant-design/icons";
import {menu} from "./DepartmentsDropDown/DepartmentsDropDown";

const StatusBlock = () => {
    return (
        <div className="StatusBlock">
            <div className="HeaderStatusBlock">
                <div className="SummaryInformation">
                    <div>
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Стационарное Отделение <DownOutlined/>
                            </a>
                        </Dropdown>
                    </div>
                    <div>Места в стационаре</div>
                    <div>Свободно/Занято/Всего</div>
                </div>
                <div className="HospitalPosition">
                    <div>АдрессГоспиталя</div>
                </div>
            </div>
        </div>

    )
}

export default StatusBlock;
