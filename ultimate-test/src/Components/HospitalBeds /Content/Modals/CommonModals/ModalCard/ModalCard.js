import React, {useContext, useState} from "react"
import "./ModalCard.css"
import {CloseOutlined} from "@ant-design/icons";
import {Button} from "antd";



const ModalCard = ({children, value}) => {

    return(
        <div className="ModalWrap">
            <form className="ModalForm" action="#">
                <div className="ModalHeader">
                    <div>{value.modalNameField}</div>
                    <div><CloseOutlined onClick={value.toggleView}/></div>
                </div>
                <div className='LineTop'/>
                {children}
                <div className='LineBottom'/>
                <div className="ModalButton">
                    <Button onClick={value.toggleView} className="IBStyle Decline">Отмена</Button>
                    <Button className="IBStyle Save" type="primary">Сохранить</Button>
                </div>
            </form>
        </div>
    )
}

export default ModalCard;