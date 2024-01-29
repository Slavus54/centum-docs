import {CodeBoxStoreType} from '../types/types'

let default_key: string = 'centum-method'

const initialState: CodeBoxStoreType = {
    currentMethod: '',
    values: []
}

export const init = () => {
    initialState.currentMethod = ''
    initialState.values = []

    localStorage.setItem(default_key, JSON.stringify(initialState))
}

export const update = ({currentMethod, values}: CodeBoxStoreType) => {
    initialState.currentMethod = currentMethod
    initialState.values = values

    localStorage.setItem(default_key, JSON.stringify(initialState))
}

export const gain = () => {
    return localStorage.getItem(default_key)
}