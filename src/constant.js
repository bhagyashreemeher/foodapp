import axios from "axios";
import jwt from 'jwt-decode';
export const API_URL = "https://invincible-ms.herokuapp.com/api";
export const Axios = axios.create({baseURL: API_URL});

const requestHandler = (request) => {
    request.headers['Authorization'] = localStorage.getItem('jwt');
    isAuthenticated();
    return request;
}

Axios.interceptors.request.use(
   request => requestHandler(request)
);

export const isAuthenticated = () =>{
    const token = localStorage.getItem('jwt');
    if(token){
        const user = jwt(token);
        if(user && new Date(Date.now())>=new Date(user.exp*1000)){
            return false;
        }
        return true;
    }
    return false;
}

export const Profile = () =>{
    const token = localStorage.getItem('jwt');
    if(token){
        const user = jwt(token);
        if(user && new Date(Date.now())>=new Date(user.exp*1000)){
            return user;
        }
        return user;
    }
    return {};
}
