import {GET_CARS/*,GET_CAR*/,ADD_CAR,DELETE_CAR,CARS_LOADING} from './types'
import axios from 'axios'

export const getCars = () => dispatch => {
    dispatch(setCarsLoading())
    axios.get('/api/cars').then(res => dispatch({
        type:GET_CARS,
        payload:res.data
    })).catch(error => dispatch())
}

/*export const getCar = id => dispatch => {
    dispatch(setCarsLoading())
    axios.get(`/api/cars/${id}`).then(res => dispatch({
        type:GET_CAR,
        payload:id,
    })).catch(error => dispatch())
}*/

export const setCarsLoading = () => {
    return {
        type:CARS_LOADING
    }
}