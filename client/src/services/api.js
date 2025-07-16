import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const savedData = async(data)=> {
    try {
       await axios.post(`${API_URL}/save`,data)
    } catch (error) {
        console.error('Error while calling save data api',error.message)
    }

}