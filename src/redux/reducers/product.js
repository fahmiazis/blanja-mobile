const productState = {
    isLoading: false,
    isError: false,
    alertMsg: '',
    data: [],
    dataPopular: [],
    detail: {},
    search: [],
    sort: []
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
            case 'GET_POPULAR_PENDING': {
                return {
                    ...state,
                    isLoading: true,
                    alertMsg: 'Waiting For data'
                };
            }
            case 'GET_POPULAR_FULFILLED': {
                return {
                    ...state,
                    isError: false,
                    isLoading: false,
                    alertMsg: 'Success get item',
                    dataPopular: action.payload.data,
                };
            }
            case 'GET_POPULAR_REJECTED': {
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
            case 'SEARCH_PENDING': {
                return {
                    ...state,
                    isLoading: true,
                    alertMsg: 'Waiting For data'
                };
            }
            case 'SEARCH_FULFILLED': {
                return {
                    ...state,
                    isError: false,
                    isLoading: false,
                    alertMsg: 'Success search item',
                    search: action.payload.data,
                };
            }
            case 'SEARCH_REJECTED': {
                return {
                    ...state,
                    isError: true,
                    alertMsg: 'search is failed'
                };
            }
            case 'SORT_PENDING': {
                return {
                    ...state,
                    isLoading: true,
                    alertMsg: 'Waiting For data'
                };
            }
            case 'SORT_FULFILLED': {
                return {
                    ...state,
                    isError: false,
                    isLoading: false,
                    alertMsg: 'Success sort item',
                    sort: action.payload.data,
                };
            }
            case 'SORT_REJECTED': {
                return {
                    ...state,
                    isError: true,
                    alertMsg: 'sort is fail'
                };
            }
            default: {
                return state;
            }
        }
    }