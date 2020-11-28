import React, {createContext, useState, useEffect, useContext} from 'react';


export const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);

export function ModalProvider({children}) {
    //Discharge Modal Places
    const [ShowDischarge, setShowDischarge] = useState(false);
    const dischargeFieldName = "Выписка пациентов";

    const onCloseDischarge = () => {
        setShowDischarge(!ShowDischarge)
        console.log('Clicked onCloseDischarge')
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

    const EditingPlacesSwitcher = {
        showModal: ShowEditing,
        toggleView: onCloseEditing,
        modalNameField: EditingFieldName,
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
