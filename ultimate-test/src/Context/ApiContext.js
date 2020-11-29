import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from "axios";
import {setLocal, getLocal, instance} from './FormatForApi'

export const ApiContext = createContext();
export const useApi = () => useContext(ApiContext);


export function ApiProvider({ children }) {
    const wrongData = JSON.stringify({username: 'Testt_ultra_task', password: 'T54321oikb'});

    const badToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYwNjUzNDU0NiwianRpIjoiMDIzOTQzNjFhY2JiNGYzODk2ZWU1ZGQ1ZGYxMTgyNDgiLCJ1c2VyX2lkIjo0MH0.F0e4e-20a7mnzp_nJfBHaJldAbGmGHgJwaOcoxSS1hw"

    async function getRefreshToken() {
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
                // auth,
                getRefreshToken,

                getHospitalsDetail,
                // setHospitalChanges,

                setHospitalTransfer,
                setHospitalRelease,

                // эТО ВООБЩЕ ЧЕ ЗА ШЛЯПА?
                // setHospitalAddition,
                setHospitalDeletion,
            }}
        >
            {children}
        </ApiContext.Provider>
    );
}
