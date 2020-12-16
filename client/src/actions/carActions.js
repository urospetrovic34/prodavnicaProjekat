import {GET_CARS,ADD_CAR,DELETE_CAR,CARS_LOADING} from './types'
import axios from 'axios'

export const getCars = () => dispatch => {
    dispatch(setCarsLoading())
    axios.get('/api/cars').then(res => dispatch({
        type:GET_CARS,
        payload:res.data
    })).catch(error => dispatch())
}

export const setCarsLoading = () => {
    return {
        type:CARS_LOADING
    }
}