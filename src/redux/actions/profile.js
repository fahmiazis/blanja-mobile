import http from '../../helpers/http'
import qs from 'qs'

export default {
    editProfile: (data, token) => ({
        type: 'EDIT_PROFILE',
        payload: http(token).patch(`/profile/customer`, qs.stringify(data)),
    }),
    getProfile: (token) => ({
        type: 'GET_PROFILE',
        payload: http(token).get(`/profile/`)
    }),
    uploadImage: (data, token) => ({
        type: 'UPLOAD_IMAGE',
        payload: http(token).patch(`/profile/customer/img`, data)
    }),
    getHistory: (token) => ({
        type: 'GET_HISTORY',
        payload: http(token).get(`/profile/history`)
    })
}
