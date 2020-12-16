import {GET_CARS,CARS_LOADING} from '../actions/types'

const initialState = {
    cars:[],
    loading:false
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_CARS:
            return{
                ...state,
                cars:action.payload,
                loading:false
            }
        case CARS_LOADING:
            return {
                ...state,
                loading:true
            }
        default:
            return state
    }
}