import axios from 'axios';

const instance = axios.create({
    baseURL:'https://burgerbuilder-1840d.firebaseio.com/'
});
export default instance;