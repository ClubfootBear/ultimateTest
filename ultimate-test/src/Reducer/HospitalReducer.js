import React, {createContext, useContext, useReducer} from 'react';
import hospitalData from './HospitalData';

// const CartContext = createContext();
// export const useCart = () => useContext(CartContext);

// reducer
export const initialState = {hospitalData};

export default function hospitalReducer(state, {type, object}) {
    // debugger
    const chosenDep = state.hospitalData.filter(d => d.id === object.depId);
    const departmentIndex = state.hospitalData.findIndex(d=> d.id === object.depId)
    console.log('departmentIndex')
    console.log(departmentIndex)
    const newHospitalData = [...state.hospitalData]
    const oxygen = object.oxygen;
    switch (type) {
        case 'PLUS':
            switch (object.sex) {
                case 'MALE': {
                    if (!oxygen) {
                        chosenDep[0].count_male_free = object.free;
                        chosenDep[0].count_male_busy = object.booked;

                        newHospitalData[departmentIndex] = chosenDep[0];
                        return {...state, hospitalData: newHospitalData};
                    } else {
                        chosenDep[0].count_male_o2_free = object.free;
                        chosenDep[0].count_male_o2_busy = object.booked;

                        newHospitalData[departmentIndex] = chosenDep[0];
                        return {...state, hospitalData: newHospitalData};
                    }
                }
                case 'FEMALE': {
                    if (!oxygen) {
                        chosenDep[0].count_female_free = object.free;
                        chosenDep[0].count_female_busy = object.booked;
                        newHospitalData[departmentIndex] = chosenDep[0];
                        return {...state, hospitalData: newHospitalData};
                    } else {
                        chosenDep[0].count_female_o2_free = object.free;
                        chosenDep[0].count_female_o2_busy = object.booked;
                        newHospitalData[departmentIndex] = chosenDep[0];
                        return {...state, hospitalData: newHospitalData};
                    }
                }
            }
        case 'MINUS':
            switch (object.sex) {
                case 'MALE': {
                    if (!oxygen) {
                        chosenDep[0].count_male_free = object.free;
                        chosenDep[0].count_male_busy = object.booked;
                        newHospitalData[departmentIndex] = chosenDep[0];
                        return {...state, hospitalData: newHospitalData};
                    } else {
                        chosenDep[0].count_male_o2_free = object.free;
                        chosenDep[0].count_male_o2_busy = object.booked;
                        newHospitalData[departmentIndex] = chosenDep[0];
                        return {...state, hospitalData: newHospitalData};
                    }
                }
                case 'FEMALE': {
                    if (!oxygen) {
                        chosenDep[0].count_female_free = object.free;
                        chosenDep[0].count_female_busy = object.booked;
                        newHospitalData[departmentIndex] = chosenDep[0];
                        return {...state, hospitalData: newHospitalData};
                    } else {
                        chosenDep[0].count_female_o2_free = object.free;
                        chosenDep[0].count_female_o2_busy = object.booked;
                        newHospitalData[departmentIndex] = chosenDep[0];
                        return {...state, hospitalData: newHospitalData};
                    }
                }
            }
        default:
            return state;
    }
}
