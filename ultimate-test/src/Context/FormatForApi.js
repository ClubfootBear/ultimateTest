export const setLocal = (stringKey, object) => {
    localStorage.setItem(stringKey, JSON.stringify(object))
}

export const getLocal = (stringKey) => {
    return localStorage.getItem(stringKey)
}