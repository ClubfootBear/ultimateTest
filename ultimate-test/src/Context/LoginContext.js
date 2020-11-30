import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from "axios";
import {setLocal, getLocal, instance} from './FormatForApi'


export const loginContext = createContext();
export const useLogin = () => useContext(loginContext);


export function LoginProvider({ children }) {

    const [isAuth, setIsAuth] = useState(getLocal('auth'));

    async function auth(userName, password) {
        // const userData = JSON.stringify({username: 'Test_ultra_task', password: 'T54321oikb'});
        const userData = JSON.stringify({username: userName, password: password});

        try {
            const response = await instance.post('api/users/token/', userData);
            const responseData = await response;
            if(responseData.status === 200){
                setLocal('refresh', responseData.data.refresh);
                setLocal('access', responseData.data.access);
                setIsAuth(true)
                // debugger
                setLocal('auth', true);
            }
        } catch (e) {
            console.error(e);
            setLocal('auth', false);
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
        setLocal('auth', false);
        console.log(getLocal('auth'))
    }

    return (
        <loginContext.Provider
            value={{
                onUserName,
                onPassword,
                onLogin,
                isAuthLocal: getLocal('auth'),
                isAuth: isAuth,
                onLogout,
            }}
        >
            {children}
        </loginContext.Provider>
    );
}
