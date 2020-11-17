const productState = {
    isLoading: false,
    isError: false,
    alertMsg: '',
    data: [],
    detail: {}
};

export default (state=productState, action) => {
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
                    data: action.payload.data,
                };
            }
            case 'GET_PRODUCT_REJECTED': {
                return {
                    ...state,
                    isError: true,
                    alertMsg: 'Data not found'
                };
            }
            case 'DETAIL_ITEM_PENDING': {
                return {
                    ...state,
                    isLoading: true,
                    alertMsg: 'Waiting For data'
                };
            }
            case 'DETAIL_ITEM_FULFILLED': {
                return {
                    ...state,
                    isError: false,
                    isLoading: false,
                    alertMsg: 'Success get item',
                    detail: action.payload.data.data,
                };
            }
            case 'DETAIL_ITEM_REJECTED': {
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