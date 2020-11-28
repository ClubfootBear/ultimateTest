import React, { createContext, useState, useEffect, useContext } from 'react';


export const HospitalContext = createContext();
export const useHospital = () => useContext(HospitalContext);


export function HospitalProvider({ children }) {

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
                MensCard,
            }}
        >
            {children}
        </HospitalContext.Provider>
    );
}
