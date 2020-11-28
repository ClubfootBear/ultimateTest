import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from "axios";


export const ApiContext = createContext();
export const useApi = () => useContext(ApiContext);


export function ApiProvider({ children }) {
    const wrongData = JSON.stringify({username: 'Testt_ultra_task', password: 'T54321oikb'});


    const setLocal = (stringKey, object) => {
        localStorage.setItem(stringKey, JSON.stringify(object))
    }

    const getLocal = (stringKey) => {
        return localStorage.getItem(stringKey)
    }


    const instance = axios.create({
        withCredentials: true,
        headers: {'Content-Type': 'application/json', Authorization: 'Basic Og=='},
        baseURL: 'https://kbapi-test.oits.su/',
    })

    async function auth() {
        const userData = JSON.stringify({username: 'Test_ultra_task', password: 'T54321oikb'});

        try {
            const response = await instance.post('api/users/token/', userData);
            const responseData = await response;
            console.log('Auth data is :')
            console.log(responseData)
            setLocal('refresh', responseData.data.refresh);
            setLocal('access', responseData.data.access);
            console.log('FirstRefreshData is :')
            console.log(getLocal('refresh'))
            console.log('FirstAccessData is :')
            console.log(getLocal('access'))
        } catch (e) {
            console.error(e);
        }
    }

    async function refreshToken() {
        const refresh = JSON.stringify({
            refresh: JSON.parse(getLocal('refresh'))
        })
        try {
            const response = await instance.post('api/users/token/refresh/', refresh);
            const responseData = await response;
            // console.log('RefreshData is :')
            // console.log(responseData)
            // setLocal('refresh', responseData.data.refresh);
            setLocal('access', responseData.data.access);
            // console.log('NewRefreshData is :')
            // console.log(getLocal('refresh'))
            // console.log('NewAccessData is :')
            // console.log(getLocal('access'))
        } catch (e) {
            console.error(e);
        }
    }

    async function additionInfo() {
        const additionInfoHeader = {
            Authorization: 'Bearer ' + JSON.parse(getLocal('access'))
        }
        try {
            const response = await instance.get('api/users/addition_info/', {headers: additionInfoHeader});
            const responseData = await response;
            // console.log('additionInfoHeader is :')
            // console.log(responseData)
            setLocal('departments', responseData.data.departments);
            setLocal('groups', responseData.data.groups);
            // console.log('departments is :')
            // console.log(getLocal('departments'))
            // console.log('groups is :')
            // console.log(getLocal('groups'))
            // departments is :
            //     ApiQueries.js:90 [{"id":2,"name":"Стационарное отделение"},{"id":3,"name":"Тестовое отделение!"},{"id":20,"name":"Тестовое супер отделение"}]
            // ApiQueries.js:91 groups is :
            //     ApiQueries.js:92 ["manager_department"]
            // ApiQueries.js:38
            // console.log("typeof " + typeof JSON.parse(getLocal('departments')))
            // console.log(JSON.parse(getLocal('departments')).map( d => d))
            // console.log(JSON.parse(getLocal('departments')).map( d => typeof d.name ))

        } catch (e) {
            console.error(e);
        }
    }

    async function getHospitals() {
        const additionInfoHeader = {
            Authorization: 'Bearer ' + JSON.parse(getLocal('access'))
        }
        try {
            const response = await instance.get('api/hospitals/departments/', {headers: additionInfoHeader});
            const responseData = await response;
            // console.log('Hospitals is :')
            // console.log(responseData)
            setLocal('hospitals', responseData.data);
            // console.log('departments is :')
            // console.log(getLocal('departments'))
            // console.log('Hospitals from LocalStorage :')
            // console.log(getLocal('hospitals'))
            // departments is :
            // data: Array(3)
            // 0: {id: 2, hospital: 1, hospital_name: "ГБУЗ ТО «ОИКБ» - Комсомольская, 54а", name: "Стационарное отделение", count_male_free: 2, …}
            // >0:
            // count_female_busy: 2
            // count_female_free: 15
            // count_female_o2_busy: 11
            // count_female_o2_free: 4
            // count_male_busy: 22
            // count_male_free: 2
            // count_male_o2_busy: 6
            // count_male_o2_free: 3
            // hospital: 1
            // hospital_name: "ГБУЗ ТО «ОИКБ» - Комсомольская, 54а"
            // id: 2
            // name: "Стационарное отделение"
            // 1: {id: 3, hospital: 1, hospital_name: "ГБУЗ ТО «ОИКБ» - Комсомольская, 54а", name: "Тестовое отделение!", count_male_free: 1, …}
            // 2: {id: 20, hospital: 1, hospital_name: "ГБУЗ ТО «ОИКБ» - Комсомольская, 54а", name: "Тестовое супер отделение", count_male_free: 13, …}
            // console.log("typeof " + typeof JSON.parse(getLocal('departments')))
            // console.log(JSON.parse(getLocal('departments')).map( d => d))
            // console.log(JSON.parse(getLocal('departments')).map( d => typeof d.name ))

        } catch (e) {
            console.error(e);
        }
    }


    async function getHospitalsDetail(department_id) {
        const additionInfoHeader = {
            Authorization: 'Bearer ' + JSON.parse(getLocal('access'))
        }
        try {
            // const department_id = 20;
            const response = await instance.get(`api/hospitals/departments/${department_id}/`, {headers: additionInfoHeader});
            const responseData = await response;
            console.log('getHospitalsDetail is :')
            console.log(responseData.data)
            // setLocal('hospitals', responseData.data);
            // console.log('departments is :')
            // console.log(getLocal('departments'))
            // console.log('Hospitals from LocalStorage :')
            // console.log(getLocal('hospitals'))
            // departments is :
            // console.log("typeof " + typeof JSON.parse(getLocal('departments')))
            // console.log(JSON.parse(getLocal('departments')).map( d => d))
            // console.log(JSON.parse(getLocal('departments')).map( d => typeof d.name ))

        } catch (e) {
            console.error(e);
        }
    }

    async function setHospitalChanges() {
        const additionInfoHeader = {
            Authorization: 'Bearer ' + JSON.parse(getLocal('access'))
        }

        const dataToChange = JSON.stringify({
            department_id: 20,

            count_female_busy: 0,
            count_female_o2_busy: 0,
            count_female_free: 30,
            count_female_o2_free: 30,

            count_male_busy: 0,
            count_male_o2_busy: 0,
            count_male_free: 30,
            count_male_o2_free: 30
        });

        try {
            // const department_id = 20;
            const response = await instance.post(`api/hospitals/bunks/multiple_change/`,dataToChange, {
                headers: additionInfoHeader
            });

            const responseData = await response;
            console.log('getHospitalsDetail is :')
            console.log(responseData.data)
        } catch (e) {
            console.error(e);
        }
    }

    async function setHospitalAddition() {
        const additionInfoHeader = {
            Authorization: 'Bearer ' + JSON.parse(getLocal('access'))
        }

        const dataToAddition = JSON.stringify({
            department_id: 20,
            busy_count: 5,
            free_count: 5,
            sex: 'male',
            has_oxygen: 'no',
        });

        try {
            // const department_id = 20;
            const response = await instance.post(`api/hospitals/bunks/multiple_addition/`,dataToAddition, {
                headers: additionInfoHeader
            });

            const responseData = await response;
            console.log('setHospitalAddition is :')
            console.log(responseData.data)
        } catch (e) {
            console.error(e);
        }
    }

// Дичь
    async function setHospitalDeletion() {
        const additionInfoHeader = {
            Authorization: 'Bearer ' + JSON.parse(getLocal('access'))
        }

        const dataToDeletion = JSON.stringify({
            department_id: 20,
            busy_count: 5,
            free_count: 5,
            sex: 'male',
            has_oxygen: 'no',
        });

        try {
            const response = await instance.post(`api/hospitals/bunks/multiple_deletion/`,dataToDeletion, {
                headers: additionInfoHeader
            });

            const responseData = await response;
            console.log('setHospitalAddition is :')
            console.log(responseData.data)
        } catch (e) {
            console.error(e);
        }
    }
// Дичь
    async function setHospitalTransfer() {
        const additionInfoHeader = {
            Authorization: 'Bearer ' + JSON.parse(getLocal('access'))
        }

        const dataToTransfer = JSON.stringify({
            from_department_id: 3,
            from_sex: 'FEMALE',
            from_has_oxygen: 'True',

            to_department_id: 20,
            to_sex: 'FEMALE',
            to_has_oxygen: 'True',

            count: 17
        });

        try {
            // const department_id = 20;
            const response = await instance.post(`api/hospitals/bunks/transfer/`,dataToTransfer, {
                headers: additionInfoHeader
            });

            const responseData = await response;
            console.log('getHospitalsDetail is :')
            console.log(responseData.data)
        } catch (e) {
            console.error(e);
        }
    }

    async function setHospitalRelease() {
        const additionInfoHeader = {
            Authorization: 'Bearer ' + JSON.parse(getLocal('access'))
        }

        const dataToRelease = JSON.stringify({
            department_id: 20,
            sex: 'FEMALE',
            has_oxygen: 'True',
        });

        try {
            // const department_id = 20;
            const response = await instance.post(`api/hospitals/bunks/release/`,dataToRelease, {
                headers: additionInfoHeader
            });

            const responseData = await response;
            console.log('setHospitalRelease is :')
            console.log(responseData.data)
        } catch (e) {
            console.error(e);
        }
    }

    window.addEventListener('storage', event => {
        console.log(event)
    })

    return (
        <ApiContext.Provider
            value={{
                auth,
                refreshToken,
                additionInfo,
                getHospitals,
                getHospitalsDetail,
                setHospitalChanges,
                setHospitalTransfer,
                setHospitalRelease,

                // эТО ВООБЩЕ ЧЕ ЗА ШЛЯПА?
                setHospitalAddition,
                setHospitalDeletion,
            }}
        >
            {children}
        </ApiContext.Provider>
    );
}
