import React, {createContext, useState, useEffect, useContext, useReducer} from 'react';
import {useHospital} from "./HospitalContext";
import {getLocal, instance, setLocal} from "./FormatForApi";


export const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);

// const useForceUpdate = () => useState()[1];

export function ModalProvider({children}) {

    // const {departmentsGroup, hospitalGroup} = useHospital();
    // const departmentId = departmentsGroup.department.id;
    // const setDepartment = departmentsGroup.setDepartment;

    async function getDepartmentModal(departmentId) {
        const additionInfoHeader = {
            Authorization: 'Bearer ' + JSON.parse(getLocal('access'))
        }
        try {
            // const response = await instance.get('api/hospitals/departments/', {headers: additionInfoHeader});
            const response = await instance.get(`api/hospitals/departments/${departmentId}/`, {headers: additionInfoHeader});
            const responseData = await response;
            if (responseData.status === 200) {
                const departmentIncome = await responseData.data;
                setLocal('department', departmentIncome);

                const dep = getLocal('department')
                // debugger
                // setDepartment(dep);
                console.log('iNNER gET')
                setShowEditing(true)
            }
        } catch (e) {
            console.error(e);
        }
    }


    //Discharge Modal Places
    const [ShowDischarge, setShowDischarge] = useState(false);
    const dischargeFieldName = "Выписка пациентов";

    const onCloseDischarge = () => {
        setShowDischarge(!ShowDischarge)
    }

    const DischargeSwitcher = {
        showModal: ShowDischarge,
        toggleView: onCloseDischarge,
        modalNameField: dischargeFieldName,
    }

    //Transfer Modal
    const [ShowTransfer, setShowTransfer] = useState(false);
    const TransferFieldName = "Перевод пациентов";

    const onCloseTransfer = () => {
        setShowTransfer(!ShowTransfer)
    }

    const TransferSwitcher = {
        showModal: ShowTransfer,
        toggleView: onCloseTransfer,
        modalNameField: TransferFieldName,
    }


//Editing Modal Places
    const [ShowEditing, setShowEditing] = useState(false);
    const EditingFieldName = "Редактирование мест";

    const onCloseEditing = () => {
        setShowEditing(!ShowEditing)
    }

    const onClickEditing = () => {
        // getDepartmentModal(departmentId)
        // console.log('AFTER GET')
    }

    const onSendEditing  = () => {
        console.log('Privet')
    }

    const EditingPlacesSwitcher = {
        showModal: ShowEditing,
        toggleView: onCloseEditing,
        modalNameField: EditingFieldName,
        // onSend: onSendEditing,
        // onClickModal: onClickEditing,
    }


    return (
        <ModalContext.Provider
            value={{
                DischargeSwitcher,
                EditingPlacesSwitcher,
                TransferSwitcher,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}
