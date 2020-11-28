import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from "axios";
import {setLocal, getLocal} from './FormatForApi'


export const loginContext = createContext();
export const useLogin = () => useContext(loginContext);


export function LoginProvider({ children }) {

    const instance = axios.create({
        withCredentials: true,
        headers: {'Content-Type': 'application/json', Authorization: 'Basic Og=='},
        baseURL: 'https://kbapi-test.oits.su/',
    })

    const [isAuth, setIsAuth] = useState(false);

    async function auth(userName, password) {
        // const userData = JSON.stringify({username: 'Test_ultra_task', password: 'T54321oikb'});
        const userData = JSON.stringify({username: userName, password: password});

        try {
            const response = await instance.post('api/users/token/', userData);
            const responseData = await response;
            console.log('Auth data is :')
            console.log(responseData)

            console.log('Auth CODE is :')
            console.log(responseData.status)
            if(responseData.status === 200){
                setLocal('refresh', responseData.data.refresh);
                setLocal('access', responseData.data.access);
                setIsAuth(true)
            }

            console.log('FirstRefreshData is :')
            console.log(getLocal('refresh'))
            console.log('FirstAccessData is :')
            console.log(getLocal('access'))
        } catch (e) {
            console.error(e);
        }
    }

    const [userName, SetUserName] = useState();
    const [password, SetPassword] = useState();

    const onUserName = (e) => {
        SetUserName(e.target.value)
    }

    const onPassword = (e) => {
        SetPassword(e.target.value)
    }

   async function onLogin() {
      await auth(userName, password)
    }

    const onLogout = () => {
        setIsAuth(false)
    }

    return (
        <loginContext.Provider
            value={{
                onUserName,
                onPassword,
                onLogin,
                isAuth,
                onLogout,
            }}
        >
            {children}
        </loginContext.Provider>
    );
}
