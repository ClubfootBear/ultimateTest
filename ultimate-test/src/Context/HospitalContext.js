import React, { createContext, useState, useEffect, useContext } from 'react';

export const HospitalContext = createContext();
export const useHospital = () => useContext(HospitalContext);

export function HospitalProvider({ children }) {
    //Discharge Modal Places
    const [ShowDischarge, setShowDischarge] = useState(false);

    const onCloseDischarge = () => {
        setShowDischarge(!ShowDischarge)
        console.log('Clicked onCloseDischarge')
    }

    const DischargeSwitcher = {
        ShowDischarge: ShowDischarge,
        onCloseDischarge: onCloseDischarge,
    }


    //Editing Modal Places
    const [ShowEditing, setShowEditing] = useState(false);

    const onCloseEditing = () => {
        setShowEditing(!ShowEditing)
    }

    const EditingPlacesSwitcher = {
        ShowEditing: ShowEditing,
        onCloseEditing: onCloseEditing,
    }


    //Editing Modal Transfer
    const [ShowTransfer, setShowTransfer] = useState(false);

    const onCloseTransfer = () => {
        setShowTransfer(!ShowTransfer)
    }

    const TransferSwitcher = {
        ShowTransfer: ShowTransfer,
        onCloseTransfer: onCloseTransfer,
    }



    return (
        <HospitalContext.Provider
            value={{
                DischargeSwitcher,
                EditingPlacesSwitcher,
                TransferSwitcher,
            }}
        >
            {children}
        </HospitalContext.Provider>
    );
}
