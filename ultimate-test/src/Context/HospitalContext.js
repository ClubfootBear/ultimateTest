import React, { createContext, useState, useEffect, useContext } from 'react';
// import Modals from "./ModalContext/ModalContext";
// import {DischargeSwitcher} from './ModalContext/ModalContext';


export const HospitalContext = createContext();
export const useHospital = () => useContext(HospitalContext);

// const DischargeSwitcher = DischargeSwitcher;
// const EditingPlacesSwitcher = Modals.EditingPlacesSwitcher;
// const TransferSwitcher = Modals.TransferSwitcher;


export function HospitalProvider({ children }) {
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
        modalNameField :dischargeFieldName,
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

    //CardModels
    const [MensTotal, SetMensTotal] = useState(30);
    const [MensBooked, SetMensBooked] = useState(25);
    const [MensFree, SetMensFree] = useState(MensTotal - MensBooked);

    const onChangePlusMens = () => {
       if (MensBooked === MensTotal) {
            return;
       }
       else {
           SetMensBooked((prevState) => prevState + 1 )
           SetMensFree((prevState) => prevState - 1 )
           }
    }

    const onChangeMinusMens = () => {
        if (MensFree === MensTotal) {
            return;
        }
        else {
            SetMensBooked((prevState) => prevState - 1 )
            SetMensFree((prevState) => prevState + 1 )
        }
    }

    const MensFieldName = "Мужские";

    const MensCard = {
        FreePlaces: MensFree,
        BookedPlaces: MensBooked,
        TotalPlaces: MensTotal,
        cardFieldName: MensFieldName,
        plusPlaces: onChangePlusMens,
        MinusPlaces: onChangeMinusMens,
    }


    return (
        <HospitalContext.Provider
            value={{
                DischargeSwitcher,
                EditingPlacesSwitcher,
                TransferSwitcher,

                MensCard,
            }}
        >
            {children}
        </HospitalContext.Provider>
    );
}
