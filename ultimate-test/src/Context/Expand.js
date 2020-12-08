import React, {createContext, useState, useEffect, useContext, useReducer} from 'react';
import {getLocal, setLocal, instance} from "./FormatForApi";
// import {hospitalReducer, initialState} from "../Reducer/HospitalReducer";
import testValue from "../Reducer/testValue";
import {loginContext} from "./LoginContext";
import hospitalReducer, {initialState} from "../Reducer/HospitalReducer";
import {useHospital} from "./HospitalContext";


export const ExpandContext = createContext();
export const useExpand = () => useContext(ExpandContext);

export function ExpandProvider({children}) {

    const {departmentsGroup} = useHospital()
    const department = departmentsGroup.department;

    const fieldNames = ["Мужские", "Мужские с кислородом", "Женские", "Женские с кислородом"];

    const count_male_free = department.count_male_free;
    const count_male_o2_free = department.count_male_o2_free;
    const count_female_free = department.count_female_free;
    const count_female_o2_free = department.count_female_o2_free;

    const count_male_busy = department.count_male_busy;
    const count_male_o2_busy = department.count_male_o2_busy;
    const count_female_busy = department.count_female_busy;
    const count_female_o2_busy = department.count_female_o2_busy;

    const totalFree = count_male_free + count_male_o2_free + count_female_free + count_female_o2_free;
    const totalBusy = count_male_busy + count_male_o2_busy + count_female_busy + count_female_o2_busy;
    const totalAbsolut = totalBusy + totalFree;

    const freePlaces = (placeType) => {
        if (placeType === 'Мужские') {
            return count_male_free;
        }
        if (placeType === 'Мужские с кислородом') {
            return count_male_o2_free;
        }
        if (placeType === 'Женские') {
            return count_female_free;
        }
        if (placeType === 'Женские с кислородом') {
            return count_female_o2_free;
        }
    }

    const bookedPlaces = (placeType) => {
        if (placeType === 'Мужские') {
            return count_male_busy;
        }
        if (placeType === 'Мужские с кислородом') {
            return count_male_o2_busy;
        }
        if (placeType === 'Женские') {
            return count_female_busy;
        }
        if (placeType === 'Женские с кислородом') {
            return count_female_o2_busy;
        }
    }

    const totalPlaces = (placeType) => {
        if (placeType === 'Мужские') {
            return count_male_free + count_male_busy;
        }
        if (placeType === 'Мужские с кислородом') {
            return count_male_o2_free + count_male_o2_busy;
        }
        if (placeType === 'Женские') {
            return count_female_free + count_female_busy;
        }
        if (placeType === 'Женские с кислородом') {
            return count_female_o2_free + count_female_o2_busy;
        }
    }

    const sex = (placeType) => {
        if (placeType === 'Мужские' || placeType === 'Мужские с кислородом') {
            return 'MALE';
        }
        if (placeType === 'Женские' || placeType === 'Женские с кислородом') {
            return 'FEMALE';
        }
    }

    const oxygen = (placeType) => {
        if (placeType === 'Мужские' || placeType === 'Женские') {
            return false;
        }
        if (placeType === 'Мужские с кислородом' || placeType === 'Женские с кислородом') {
            return true;
        }
    }

    const typeFree = (placeType) => {
        if (placeType === 'Мужские') {
            return 'count_male_free';
        }
        if (placeType === 'Мужские с кислородом') {
            return 'count_male_o2_free';
        }
        if (placeType === 'Женские') {
            return 'count_female_free';
        }
        if (placeType === 'Женские с кислородом') {
            return 'count_female_o2_free';
        }
    }

    const typeBooked = (placeType) => {
        if (placeType === 'Мужские') {
            return 'count_male_busy';
        }
        if (placeType === 'Мужские с кислородом') {
            return 'count_male_o2_busy';
        }
        if (placeType === 'Женские') {
            return 'count_female_busy';
        }
        if (placeType === 'Женские с кислородом') {
            return 'count_female_o2_busy';
        }
    }

    const expand = {
        fieldNames,

        freePlaces,
        bookedPlaces,
        totalPlaces,

        sex,
        oxygen,
        typeFree,
        typeBooked,
    }

    const summoryDepartment = {
        totalFree,
        totalBusy,
        totalAbsolut,
    }


    return (
    <ExpandContext.Provider
        value={{
            expand,
            summoryDepartment
        }}
    >
        {children}
    </ExpandContext.Provider>
);
}




