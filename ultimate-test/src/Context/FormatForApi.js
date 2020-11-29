import axios from "axios";

export const setLocal = (stringKey, object) => {
    localStorage.setItem(stringKey, JSON.stringify(object))
}

export const getLocal = (stringKey) => {
    return localStorage.getItem(stringKey)
}

export const instance = axios.create({
    withCredentials: true,
    headers: {'Content-Type': 'application/json', Authorization: 'Basic Og=='},
    baseURL: 'https://kbapi-test.oits.su/',
})