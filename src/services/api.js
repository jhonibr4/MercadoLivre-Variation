import axios from 'axios'

const api = axios.create({
    baseURL:'https://api.mercadolibre.com/items/'
})
export default api;