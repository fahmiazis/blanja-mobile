import http from '../../helpers/http'
import qs from 'qs'

export default {
    getAddress: (token) => ({
        type: 'GET_ADDRESS',
        payload: http(token).get(`/profile/address`),
    }),
    addAddress: (token, data) => ({
        type: 'ADD_ADDRESS',
        payload: http(token).post(`/users/address`, qs.stringify(data))
    })
}
