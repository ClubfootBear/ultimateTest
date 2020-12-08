import React from "react";
import "./StatusBlock.css"
import {Dropdown, Menu} from "antd";
import {AimOutlined, DownOutlined} from "@ant-design/icons";
import {useHospital} from "../../../../Context/HospitalContext";
import {useExpand} from "../../../../Context/Expand";


const StatusBlock = () => {

    const {departmentsGroup} = useHospital();
    const departments = departmentsGroup.departments;
    const hospitalName = departmentsGroup.department.hospital_name;
    const departmentName = departmentsGroup.department.name;

    const selectDepartment = departmentsGroup.selectDepartment;

    const {summoryDepartment} = useExpand();
    const totalFree = summoryDepartment.totalFree;
    const totalBusy = summoryDepartment.totalBusy;
    const totalAbsolut = summoryDepartment.totalAbsolut;


    const menu = (
        <Menu>
            {departments.map((d, index) =>
                !(departmentName === d.name) &&
                <Menu.Item key={d.name} onClick={() => selectDepartment(d.id)}
                           className="DepartmentDropDown">
                    {d.name}
                </Menu.Item>
            )}
        </Menu>
    );

    return (
        <div className="StatusBlock">
            <div className="HeaderStatusBlock">
                <div className="SummaryInformation">
                    <div className="DepartmentDropDown">
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                {departmentName + " "}<DownOutlined/>
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
                    <div><AimOutlined style={{marginRight: '9px'}}/>{hospitalName}</div>
                </div>
            </div>
        </div>

    )
}

export default StatusBlock;
