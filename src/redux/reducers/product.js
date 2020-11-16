const authState = {
    isLoading: false,
    isError: false,
    alertMsg: '',
    data: []
};

export default (state=authState, action) => {
        switch(action.type){
            case 'GET_PRODUCT_PENDING': {
                return {
                    ...state,
                    isLoading: true,
                    alertMsg: 'Waiting For data'
                };
            }
            case 'GET_PRODUCT_FULFILLED': {
                return {
                    ...state,
                    isError: false,
                    isLoading: false,
                    alertMsg: 'Success get item',
                    data: action.payload.data.data,
                };
            }
            case 'GET_PRODUCT_REJECTED': {
                return {
                    ...state,
                    isError: true,
                    alertMsg: 'Data not found'
                };
            }
            default: {
                return state;
            }
        }
    }