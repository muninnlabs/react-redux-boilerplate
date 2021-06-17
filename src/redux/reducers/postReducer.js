import { 
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_FAILURE,
    NEW_POST_SUCCESS,
    NEW_POST_REQUEST,
    NEW_POST_FAILURE 
} from '../types';

const initialState = {
    loading: false,
    items: [],
    item: {}, 
    error: '',
    newPost: {}
}

const reducer = (state= initialState, action) => {
    switch(action.type){
        case FETCH_POSTS_REQUEST:
            return {
              ...state,
              loading: true
            }
        case FETCH_POSTS_SUCCESS:
            return {
                loading: false,
                items: action.payload,
                error: ''
            }
        case FETCH_POSTS_FAILURE:
            return {
                loading: false,
                items: [],
                error: action.payload
            }
        case NEW_POST_REQUEST:
            return {
              ...state,
              loading: true
            }
        case NEW_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                newPost: action.payload,
                error: ''
            }
        case NEW_POST_FAILURE:
            return {
                loading: false,
                newPost: {},
                error: action.payload
            }
        
        default:
            return state;
    }
}  

export default reducer;