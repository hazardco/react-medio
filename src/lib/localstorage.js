export const saveToLocalStorage = (item, state) => {
    localStorage.setItem(item, JSON.stringify(state))
}

export const initialStateLocalStore = (item) => {
    return JSON.parse(localStorage.getItem(item))
}