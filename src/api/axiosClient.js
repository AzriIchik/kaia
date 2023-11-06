import axios from "axios";


let AxiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}api`
})


export default AxiosClient;
