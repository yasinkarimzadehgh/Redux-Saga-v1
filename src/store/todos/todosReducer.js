const initialState = {
    loading: false,
    data: null,
    error: ''
};

export const TodosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_LOADING': {
            console.log('Loading')
            return {
                ...state,
                loading: true,
                data: null,
                error: ''
            };
        }
        case 'REQUEST_SUCCESS': {
            console.log('Success')

            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            };
        }
        case 'REQUEST_FAILURE': {
            console.log('Failure')

            return {
                ...state,
                loading: false,
                data: null,
                error: action.payload
            };
        }
        default: {
            return state;
        }
    }
};




export const todosSelector = (state) => state.todosReducer;