const authState = {
    isLoading: false,
    isError: false,
    alertMsg: '',
    isSuccess: false,
    successAddCart: false,
    deleteSuccess: false,
    data: [],
};

export default (state=authState, action) => {
        switch(action.type){
            case 'GET_CART_PENDING': {
                return {
                    ...state,
                    isLoading: true,
                    alertMsg: 'Waiting For data'
                };
            }
            case 'GET_CART_FULFILLED': {
                return {
                    ...state,
                    isError: false,
                    isLoading: false,
                    successAddCart: false,
                    deleteSuccess: false,
                    alertMsg: 'Success get item',
                    data: action.payload.data.data,
                    isSuccess: true
                };
            }
            case 'GET_CART_REJECTED': {
                return {
                    ...state,
                    isError: true,
                    alertMsg: 'Data not found'
                };
            }
            case 'ADD_CART_PENDING': {
                return {
                    ...state,
                    isLoading: true,
                    alertMsg: 'Waiting For send data'
                };
            }
            case 'ADD_CART_FULFILLED': {
                return {
                    ...state,
                    isError: false,
                    isLoading: false,
                    alertMsg: 'Success add cart',
                    successAddCart: true
                };
            }
            case 'ADD_CART_REJECTED': {
                return {
                    ...state,
                    isError: true,
                    alertMsg: 'Failed edit profile'
                };
            }
            case 'DELETE_CART_PENDING': {
                return {
                    ...state,
                    isLoading: true,
                    alertMsg: 'Waiting For send data'
                };
            }
            case 'DELETE_CART_FULFILLED': {
                return {
                    ...state,
                    isError: false,
                    isLoading: false,
                    alertMsg: 'delete Success',
                    deleteSuccess: true
                };
            }
            case 'DELETE_CART_REJECTED': {
                return {
                    ...state,
                    isError: true,
                    alertMsg: 'Failed delete cart'
                };
            }
            default: {
                return state;
            }
        }
    }