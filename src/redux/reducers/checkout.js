const checkoutState = {
    isLoading: false,
    isError: false,
    alertMsg: '',
    isSuccess: false,
    order: 0,
    summary: 0,
    delivery: 0,
    address: [],
    data: []
};

export default (state=checkoutState, action) => {
        switch(action.type){
            case 'GET_CHECKOUT_PENDING': {
                return {
                    ...state,
                    isLoading: true,
                    alertMsg: 'Waiting For data'
                };
            }
            case 'GET_CHECKOUT_FULFILLED': {
                return {
                    ...state,
                    isError: false,
                    isLoading: false,
                    alertMsg: 'Success get checkout',
                    data: action.payload.data,
                    delivery: action.payload.data.delivery,
                    order: action.payload.data.order,
                    summary: action.payload.data.summary,
                    address: action.payload.data.address,
                    isSuccess: true
                };
            }
            case 'GET_CHECKOUT_REJECTED': {
                return {
                    ...state,
                    isError: true,
                    alertMsg: 'Data not found'
                };
            }
            case 'BUY_PENDING': {
                return {
                    ...state,
                    isLoading: true,
                    alertMsg: 'Waiting For Buy'
                };
            }
            case 'BUY_FULFILLED': {
                return {
                    ...state,
                    isError: false,
                    isLoading: false,
                    alertMsg: 'Buy Success',
                    isSuccess: true
                };
            }
            case 'BUY_REJECTED': {
                return {
                    ...state,
                    isError: true,
                    alertMsg: 'Buy Data Failed'
                };
            }
            default: {
                return state;
            }
        }
    }