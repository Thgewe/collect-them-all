
// if the properties exist, then it does nothing, if not, it creates them with an initial value
export const getIfNullSetLocalStorage = (gameId, item, property, initialVal) => {
    if (localStorage.getItem(gameId + '_' + item + '_' + property) === null) {
        localStorage.setItem(gameId + '_' + item + '_' + property, initialVal)
    } else {
        return localStorage.getItem(gameId + '_' + item + '_' + property)
    }
}

// sets property by template
export const setLocalStorage = (gameId, item, property, value) => {
    localStorage.setItem(gameId + '_' + item + '_' + property, value)
}