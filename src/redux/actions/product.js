import http from '../../helpers/http'
import qs from 'qs'

export default {
    getItem: () => ({
        type: 'GET_PRODUCT',
        payload: http().get(`/home/new`),
    }),
    getItemPopular: () => ({
        type: 'GET_POPULAR',
        payload: http().get(`/home/new?sort[created_at]=asc`),
    }),
    detailItem: (id) => ({
        type: 'DETAIL_ITEM',
        payload: http().get(`/home/detail/${id}`)
    }),
    searchProduct: (data) => ({
        type: 'SEARCH',
        payload: http().get(`/home/new?search[name]=${data}`)
    }),
    sortProduct: (data) => ({
        type: 'SORT',
        payload: http().get(`/home/new?sort[price]=${data}`),
    })
}
