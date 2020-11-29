import React from "react";
import "./StatusBlock.css"
import {Dropdown, Menu} from "antd";
import {AimOutlined, DownOutlined} from "@ant-design/icons";
import {useHospital} from "../../../../Context/HospitalContext";


const StatusBlock = () => {

    const {departmentsGroup, hospitalGroup} = useHospital();
    const selectedDepartment = departmentsGroup.selectedDepartment;
    const totalFree = departmentsGroup.totalFree;
    const totalBusy = departmentsGroup.totalBusy;
    const totalAbsolut = departmentsGroup.totalAbsolut;


    const menu = (
        <Menu>
            {departmentsGroup.departments.map((d, index) =>
                !(selectedDepartment === d.name) &&
                <Menu.Item key={d.name} onClick={() => departmentsGroup.selectDepartment(d.name, d.id)}
                           className="DepartmentDropDown">
                    {d.name}
                </Menu.Item>
            )}
        </Menu>
    );

    // additionInfo();

    return (
        <div className="StatusBlock">
            <div className="HeaderStatusBlock">
                <div className="SummaryInformation">
                    <div className="DepartmentDropDown">
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                {selectedDepartment + " "}<DownOutlined/>
                            </a>
                        </Dropdown>
                    </div>
                    <div className="HospitalBeds">
                        <p>Места в стационаре</p>
                    </div>
                    <div className="TotalStatusTags">
                        <div className="Free">Свободно <span>{totalFree}</span></div>
                        <div className="Busy">Занято <span>{totalBusy}</span></div>
                        <div className="Total">Всего <span>{totalAbsolut}</span></div>
                    </div>
                </div>
                <div className="HospitalPosition">
                    <div><AimOutlined style={{marginRight: '9px'}}/>{hospitalGroup.selectedHospital}</div>
                </div>
            </div>
        </div>

    )
}

export default StatusBlock;
