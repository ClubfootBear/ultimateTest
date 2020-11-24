import React from "react";
import { Button } from 'antd';
import { InfoCircleOutlined} from '@ant-design/icons';
import "./ButtonBlock.css"
import {useHospital} from "../../../../Context/HospitalContext";


const ButtonBlock = (props) => {

    const {DischargeSwitcher, EditingPlacesSwitcher, TransferSwitcher} = useHospital();

    return(
        <div className="ButtonWrapperBlock">
            <div className="ButtonBlock">
                {/*<div className="Plug"></div>*/}
                <div className="ButtonInnerWrapper">
                    <Button onClick={EditingPlacesSwitcher.toggleView} className="ActionButton Btn560" type="primary">Изменить число мест</Button>
                    <Button onClick={TransferSwitcher.toggleView} className="ActionButton Btn560">Перевести пациентов</Button>
                    <Button onClick={DischargeSwitcher.toggleView} className="ActionButton Btn560">Выписать пациентов</Button>
                    <Button className="ActionButton Btn560">
                        <InfoCircleOutlined />
                        Места в других отделениях
                    </Button>
                </div>
                {/*<div className="Plug"></div>*/}
            </div>
        </div>
    )
}


export default ButtonBlock;
