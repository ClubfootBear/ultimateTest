import React from "react";
import { Button } from 'antd';
import { InfoCircleOutlined} from '@ant-design/icons';
import "./ButtonBlock.css"


const ButtonBlock = () => {
    return(
        <div className="ButtonWrapperBlock">
            <div className="ButtonBlock">
                {/*<div className="Plug"></div>*/}
                <div className="ButtonInnerWrapper">
                    <Button className="ActionButton" type="primary">Изменить число мест</Button>
                    <Button className="ActionButton">Перевести пациентов</Button>
                    <Button className="ActionButton">Выписать пациентов</Button>
                    <Button className="ActionButton">
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
