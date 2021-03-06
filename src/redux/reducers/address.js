const productState = {
    isLoading: false,
    isError: false,
    alertMsg: '',
    address: []
};

export default (state=productState, action) => {
        switch(action.type){
            case 'GET_ADDRESS_PENDING': {
                return {
                    ...state,
                    isLoading: true,
                    alertMsg: 'Waiting For data'
                };
            }
            case 'GET_ADDRESS_FULFILLED': {
                return {
                    ...state,
                    isError: false,
                    isLoading: false,
                    alertMsg: 'Success get address',
                    address: action.payload.data.data,
                };
            }
            case 'GET_ADDRESS_REJECTED': {
                return {
                    ...state,
                    isError: true,
                    alertMsg: 'Address not found'
                };
            }
            case 'ADD_ADDRESS_PENDING': {
                return {
                    ...state,
                    isLoading: true,
                    alertMsg: 'Waiting sending data'
                };
            }
            case 'ADD_ADDRESS_FULFILLED': {
                return {
                    ...state,
                    isError: false,
                    isLoading: false,
                    alertMsg: 'Success add address',
                };
            }
            case 'ADD_ADDRESS_REJECTED': {
                return {
                    ...state,
                    isError: true,
                    alertMsg: 'add address failed'
                };
            }
            default: {
                return state;
            }
        }
    }