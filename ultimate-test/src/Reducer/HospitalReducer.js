import React, {createContext, useContext, useReducer} from 'react';
import testValue from './testValue';

// const CartContext = createContext();
// export const useCart = () => useContext(CartContext);

// reducer
export const initialState = {testValue};

export default function hospitalReducer(state, {type, object}) {
    const chosenDep = state.testValue.filter(d => d.id === object.depId);
    const oxygen = object.oxygen;
    switch (type) {
        case 'PLUS':
            switch (object.sex) {
                case 'MALE': {
                    if (!oxygen) {
                        chosenDep[0].count_male_free = object.free - 1;
                        chosenDep[0].count_male_busy = object.booked + 1;
                        return {...state, testValue: chosenDep};
                    } else {
                        chosenDep[0].count_male_o2_free = object.free - 1;
                        chosenDep[0].count_male_o2_busy = object.booked + 1;
                        return {...state, testValue: chosenDep};
                    }
                }
                case 'FEMALE': {
                    if (!oxygen) {
                        chosenDep[0].count_female_free = object.free - 1;
                        chosenDep[0].count_female_busy = object.booked + 1;
                        return {...state, testValue: chosenDep};
                    } else {
                        chosenDep[0].count_female_o2_free = object.free - 1;
                        chosenDep[0].count_female_o2_busy = object.booked + 1;
                        return {...state, testValue: chosenDep};
                    }
                }
            }
        case 'MINUS':
            switch (object.sex) {
                case 'MALE': {
                    if (!oxygen) {
                        chosenDep[0].count_male_free = object.free + 1;
                        chosenDep[0].count_male_busy = object.booked - 1;
                        return {...state, testValue: chosenDep};
                    } else {
                        chosenDep[0].count_male_o2_free = object.free + 1;
                        chosenDep[0].count_male_o2_busy = object.booked - 1;
                        return {...state, testValue: chosenDep};
                    }
                }
                case 'FEMALE': {
                    if (!oxygen) {
                        chosenDep[0].count_female_free = object.free + 1;
                        chosenDep[0].count_female_busy = object.booked - 1;
                        return {...state, testValue: chosenDep};
                    } else {
                        chosenDep[0].count_female_o2_free = object.free + 1;
                        chosenDep[0].count_female_o2_busy = object.booked - 1;
                        return {...state, testValue: chosenDep};
                    }
                }
            }
        default:
            return state;
    }
}
