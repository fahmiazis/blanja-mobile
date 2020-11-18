const authState = {
    isLoading: false,
    isError: false,
    alertMsg: '',
    isSuccessGet: false,
    isSuccessUpdate: false,
    isSuccessImage: false,
    data: [],
    history: []
};

export default (state=authState, action) => {
        switch(action.type){
            case 'GET_PROFILE_PENDING': {
                return {
                    ...state,
                    isLoading: true,
                    alertMsg: 'Waiting For data'
                };
            }
            case 'GET_PROFILE_FULFILLED': {
                return {
                    ...state,
                    isError: false,
                    isLoading: false,
                    isSuccessImage: false,
                    isSuccessUpdate: false,
                    alertMsg: 'Success get item',
                    data: action.payload.data.data,
                    isSuccessGet: true
                };
            }
            case 'GET_PROFILE_REJECTED': {
                return {
                    ...state,
                    isError: true,
                    alertMsg: 'Data not found'
                };
            }
            case 'GET_HISTORY_PENDING': {
                return {
                    ...state,
                    isLoading: true,
                    alertMsg: 'Waiting For data'
                };
            }
            case 'GET_HISTORY_FULFILLED': {
                return {
                    ...state,
                    isError: false,
                    isLoading: false,
                    history: action.payload.data.data,
                    alertMsg: 'get history success'
                };
            }
            case 'GET_HISTORY_REJECTED': {
                return {
                    ...state,
                    isError: true,
                    alertMsg: 'get history failed'
                };
            }
            case 'EDIT_PROFILE_PENDING': {
                return {
                    ...state,
                    isLoading: true,
                    alertMsg: 'Waiting For send data'
                };
            }
            case 'EDIT_PROFILE_FULFILLED': {
                return {
                    ...state,
                    isError: false,
                    isLoading: false,
                    alertMsg: 'Success edit profile',
                    isSuccessUpdate: true
                };
            }
            case 'EDIT_PROFILE_REJECTED': {
                return {
                    ...state,
                    isError: true,
                    alertMsg: 'Failed edit profile'
                };
            }
            case 'UPLOAD_IMAGE_PENDING': {
                return {
                    ...state,
                    isLoading: true,
                    alertMsg: 'Waiting For send data'
                };
            }
            case 'UPLOAD_IMAGE_FULFILLED': {
                return {
                    ...state,
                    isError: false,
                    isLoading: false,
                    alertMsg: 'Success Upload Image',
                    isSuccessImage: true
                };
            }
            case 'UPLOAD_IMAGE_REJECTED': {
                return {
                    ...state,
                    isError: true,
                    alertMsg: 'Failed upload image'
                };
            }
            default: {
                return state;
            }
        }
    }