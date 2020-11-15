import http from '../../helpers/http'
import qs from 'qs'

export default {
    getItem: () => ({
        type: 'GET_PRODUCT',
        payload: http().get(`/home/new`),
    }),
}
