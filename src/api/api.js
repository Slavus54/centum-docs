import axios from 'axios'
import {base_url} from '../env/env'

export const getAllMethods = async () => {
    let {data} = await axios.get(`${base_url}/methods`)

    return data
}

export const getCurrentMethod = async (id) => {
    let {data} = await axios.post(`${base_url}/method`, {id})

    return data
}