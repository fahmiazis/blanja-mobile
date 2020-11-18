import http from '../../helpers/http'
import qs from 'qs'

export default {
    addCart: (token, data) => ({
        type: 'ADD_CART',
        payload: http(token).post(`/cart/add`, qs.stringify(data)),
    }),
    getCart: (token) => ({
        type: 'GET_CART',
        payload: http(token).get(`/cart/detail`)
    }),
    deleteCart: (token, id) => ({
        type: 'DELETE_CART',
        payload: http(token).delete(`/cart/${id}`)
    })
}