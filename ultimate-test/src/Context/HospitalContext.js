import React, {createContext, useState, useEffect, useContext, useReducer} from 'react';
import {getLocal, setLocal, instance} from "./FormatForApi";
// import {hospitalReducer, initialState} from "../Reducer/HospitalReducer";
import testValue from "../Reducer/testValue";
import {loginContext} from "./LoginContext";
import hospitalReducer, {initialState} from "../Reducer/HospitalReducer";

export const HospitalContext = createContext();
export const useHospital = () => useContext(HospitalContext);


// debugger

export function HospitalProvider({children}) {
    const [state, dispatch] = useReducer(hospitalReducer, initialState);

    const departments = state.hospitalData;
    const [department, setDepartment] = useState(departments[0])

    const selectDepartment = (departmentId) => {
        const departmentIndex = departments.findIndex((d)=> d.id === departmentId)
        setDepartment(departments[departmentIndex])
        // setSelectedDepartment(name)
        // getDepartment(departmentId);
    }

    //ActionFunction
    const removePlaces = (obj) => dispatch({ type: 'MINUS', object: obj });
    const addPlaces = (obj) => dispatch({ type: 'PLUS', object: obj });
    const setPlaces = (obj) => dispatch({ type: 'SET', object: obj });

    //
    const onChangeMinus = (obj) => {
        console.log('clickMinus')
        if (obj.free === obj.total) {
            return;
        } else {
            obj.free = obj.free + 1;
            obj.booked = obj.booked - 1;
            removePlaces(obj)
        }
    }


    const onChangePlus = (obj) => {
        console.log('clickPlus')
        if (obj.booked === obj.total) {
            return;
        } else {
            obj.free = obj.free - 1;
            obj.booked = obj.booked + 1;
            addPlaces(obj)
        }
    }


    //Bardak
    // const departments = JSON.parse(getLocal('departments'));
    // let dep = JSON.parse(getLocal('department'));
    // let dep = JSON.parse(getLocal('department'));
    // const [selectedDepartment, setSelectedDepartment] = useState(departments[0].name)




    const groups = getLocal('groups');



    // useEffect(() => {
    //     additionInfo();
    //     getDepartment(departments[0].id);
    //
    //     async function additionInfo() {
    //         const additionInfoHeader = {
    //             Authorization: 'Bearer ' + JSON.parse(getLocal('access'))
    //         }
    //         try {
    //             const response = await instance.get('api/users/addition_info/', {headers: additionInfoHeader});
    //             const responseData = await response;
    //             // console.log('additionInfoHeader is Talking:')
    //             // console.log(responseData)
    //             setLocal('departments', responseData.data.departments);
    //             setLocal('groups', responseData.data.groups);
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     }
    //
    // }, [])

    // async function getDepartment(departmentId) {
    //     const additionInfoHeader = {
    //         Authorization: 'Bearer ' + JSON.parse(getLocal('access'))
    //     }
    //     try {
    //         // const response = await instance.get('api/hospitals/departments/', {headers: additionInfoHeader});
    //         const response = await instance.get(`api/hospitals/departments/${departmentId}/`, {headers: additionInfoHeader});
    //         const responseData = await response;
    //         if (responseData.status === 200) {
    //             const departmentIncome = responseData.data;
    //             setLocal('department', departmentIncome);
    //             const dep = JSON.parse(getLocal('department'));
    //             console.log(dep)
    //             setDepartment(dep)
    //         }
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }
    //
    // async function setHospitalAddition(department_id, booked, free, sex, has_oxygen) {
    //     const additionInfoHeader = {
    //         Authorization: 'Bearer ' + JSON.parse(getLocal('access'))
    //     }
    //     // debugger
    //     const dataToAddition = JSON.stringify({
    //         department_id: department_id,
    //         busy_count: booked,
    //         free_count: free,
    //         sex: sex,
    //         has_oxygen: has_oxygen,
    //     });
    //     try {
    //         // const department_id = 20;
    //         const response = await instance.post(`api/hospitals/bunks/multiple_addition/`, dataToAddition, {
    //             headers: additionInfoHeader
    //         });
    //         const responseData = await response;
    //         // console.log('setHospitalAddition is :')
    //         // console.log(responseData.data)
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }
    //
    // async function setHospitalChanges(departmentObj) {
    //     const additionInfoHeader = {
    //         Authorization: 'Bearer ' + JSON.parse(getLocal('access'))
    //     }
    //     // debugger
    //     const dataToChange = JSON.stringify({
    //         department_id: departmentObj.department_id,
    //
    //         count_female_busy: departmentObj.count_female_busy,
    //         count_female_o2_busy: departmentObj.count_female_o2_busy,
    //         count_female_free: departmentObj.count_female_free,
    //         count_female_o2_free: departmentObj.count_female_o2_free,
    //
    //         // count_male_busy: departmentObj.count_male_busy,
    //         count_male_busy: departmentObj.count_male_busy,
    //         count_male_o2_busy: departmentObj.count_male_o2_busy,
    //         count_male_free: departmentObj.count_male_free,
    //         count_male_o2_free: departmentObj.count_male_o2_free
    //     });
    //     try {
    //         const response = await instance.post(`api/hospitals/bunks/multiple_change/`,dataToChange, {
    //             headers: additionInfoHeader
    //         });
    //         // getDepartment(departmentObj.department_id);
    //         const responseData = await response;
    //         //
    //         // console.log('show is :')
    //         // console.log(responseData.data)
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }




    // const fieldNames = ["Мужские", "Мужские с кислородом", "Женские", "Женские с кислородом"];
    //
    // const count_male_free = department.count_male_free;
    // const count_male_o2_free = department.count_male_o2_free;
    // const count_female_free = department.count_female_free;
    // const count_female_o2_free = department.count_female_o2_free;
    //
    // const count_male_busy = department.count_male_busy;
    // const count_male_o2_busy = department.count_male_o2_busy;
    // const count_female_busy = department.count_female_busy;
    // const count_female_o2_busy = department.count_female_o2_busy;
    //
    // const expandFreePlaces = (placeType) => {
    //     if (placeType === 'Мужские') {
    //         return count_male_free;
    //     }
    //     if (placeType === 'Мужские с кислородом') {
    //         return count_male_o2_free;
    //     }
    //     if (placeType === 'Женские') {
    //         return count_female_free;
    //     }
    //     if (placeType === 'Женские с кислородом') {
    //         return count_female_o2_free;
    //     }
    // }
    //
    // const expandBookedPlaces = (placeType) => {
    //     if (placeType === 'Мужские') {
    //         return count_male_busy;
    //     }
    //     if (placeType === 'Мужские с кислородом') {
    //         return count_male_o2_busy;
    //     }
    //     if (placeType === 'Женские') {
    //         return count_female_busy;
    //     }
    //     if (placeType === 'Женские с кислородом') {
    //         return count_female_o2_busy;
    //     }
    // }
    //
    // const expandTotalPlaces = (placeType) => {
    //     if (placeType === 'Мужские') {
    //         return count_male_free + count_male_busy;
    //     }
    //     if (placeType === 'Мужские с кислородом') {
    //         return count_male_o2_free + count_male_o2_busy;
    //     }
    //     if (placeType === 'Женские') {
    //         return count_female_free + count_female_busy;
    //     }
    //     if (placeType === 'Женские с кислородом') {
    //         return count_female_o2_free + count_female_o2_busy;
    //     }
    // }


    // let departmentObj = [{
    //     department_id: department.id,
    //
    //     count_female_busy,
    //     count_female_o2_busy,
    //     count_female_free,
    //     count_female_o2_free,
    //
    //     count_male_busy,
    //     count_male_o2_busy,
    //     count_male_free,
    //     count_male_o2_free
    // }]


    // const objReducerFree = (obj) => {
    //     let departmentObjCopy = {
    //         departmentObj: [...departmentObj]
    //     }
    //     switch (obj.freeData.typeFree) {
    //         case 'count_male_free':{
    //             departmentObjCopy.departmentObj[0].count_male_free = obj.freeData.freeSend;
    //             return departmentObjCopy.departmentObj[0];
    //         }
    //         case 'count_male_o2_free':{
    //             departmentObjCopy.departmentObj[0].count_male_o2_free = obj.freeData.freeSend;
    //             return departmentObjCopy.departmentObj[0];
    //         }
    //         case 'count_female_free':{
    //             departmentObjCopy.departmentObj[0].count_female_free = obj.freeData.freeSend;
    //             return departmentObjCopy.departmentObj[0];
    //         }
    //         case 'count_female_o2_free':{
    //             departmentObjCopy.departmentObj[0].count_female_o2_free = obj.freeData.freeSend;
    //             return departmentObjCopy.departmentObj[0];
    //         }
    //         // default:
    //         //     return departmentObjCopy;
    //     }
    //  }

    // const objReducerBusy = (obj) => {
    //     let departmentObjCopy = {
    //         departmentObj: [...departmentObj]
    //     }
    //     switch (obj.busyData.typeBusy) {
    //         case 'count_male_busy':{
    //             departmentObjCopy.departmentObj[0].count_male_busy = obj.busyData.bookedSend;
    //             return departmentObjCopy.departmentObj[0];
    //         }
    //         case 'count_male_o2_busy':{
    //             departmentObjCopy.departmentObj[0].count_male_o2_busy = obj.busyData.bookedSend;
    //             return departmentObjCopy.departmentObj[0];
    //         }
    //         case 'count_female_busy':{
    //             departmentObjCopy.departmentObj[0].count_female_busy = obj.busyData.bookedSend;
    //             return departmentObjCopy.departmentObj[0];
    //         }
    //         case 'count_female_o2_busy':{
    //             departmentObjCopy.departmentObj[0].count_female_o2_busy = obj.busyData.bookedSend;
    //             return departmentObjCopy.departmentObj[0];
    //         }
    //     }
    // }

    // const onCollectAll = (obj) => {
    //     // console.log('Show must go On!')
    //     objReducerFree(obj)
    //     const clearObj = objReducerBusy(obj)
    //     setHospitalChanges(clearObj);
    //     // handleClick(check);
    //     // getDepartment(clearObj.department_id);
    // }

    // const totalFree = count_male_free + count_male_o2_free + count_female_free + count_female_o2_free;
    // const totalBusy = count_male_busy + count_male_o2_busy + count_female_busy + count_female_o2_busy;
    // const totalAbsolut = totalBusy + totalFree;


    const card = {
        // expandFreePlaces,
        // expandBookedPlaces,
        // expandTotalPlaces,
        //
        // expandSex,
        // expandOxygen,
        // expandTypeFree,
        // expandTypeBooked,

        // fieldNames,
        // setHospitalAddition,

        onChangePlus,
        onChangeMinus,

        addPlaces,
        removePlaces,
    }

    const departmentsGroup = {
        departments,
        department,
        // selectedDepartment,
        selectDepartment,
        // totalFree,
        // totalBusy,
        // totalAbsolut,
        // setDepartment,
        // getDepartment,
    }

    const hospitalGroup = {
        // selectedHospital,
        // setHospitalAddition,
        // onCollectAll,
    }

    return (
        <HospitalContext.Provider
            value={{
                card,
                departmentsGroup,
                hospitalGroup,
            }}
        >
            {children}
        </HospitalContext.Provider>
    );
}
