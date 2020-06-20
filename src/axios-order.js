import axios from 'axios'

const instance =  axios.create({
    baseURL:'https://react-my-burger-a6ae4.firebaseio.com/'
})

export default instance