import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tin-clone.herokuapp.com'
})

export default instance;
