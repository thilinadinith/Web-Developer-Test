import axios from 'axios'
import api from './'

export default {
    async getCartData() {
        let res = await axios.get(api.root + "cart/getData");
        return res.data;
    },
    async postCartData(data) {
        let res = await axios.post(api.root + "cart/postData", data);
        return res.data;
    }
}