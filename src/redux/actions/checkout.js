import http from '../../helpers/http'

export default {
    getCheckout: (token) => ({
        type: 'GET_CHECKOUT',
        payload: http(token).get('/profile/checkout')
    }),
    buy: (token) => ({
        type: 'BUY',
        payload: http(token).post(`/profile/buy`)
    })
}