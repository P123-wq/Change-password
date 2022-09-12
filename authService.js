import axios from "axios";
import {urls} from "../config/env-config";

const tokenKey = 'skyfox_token';

export const authHeader = () => {
    return {
        headers: {
            Authorization: 'Basic ' + localStorage.getItem(tokenKey)
        }
    };
}

export const login = async (username, password) => {
    const token = authBasic(username, password);
    const config = {
        headers: {
            Authorization: 'Basic ' + token
        }
    };
    const response = await axios.get(`${urls.service}/login`, config);
    const userDetails = response.data;
    localStorage.setItem(tokenKey, token)
    localStorage.setItem("username",username);
    return userDetails;
}

export const isLoggedIn = () => {
    return localStorage.getItem(tokenKey) !== null;
}

export const logout = () => {
    localStorage.removeItem(tokenKey);
    localStorage.removeItem("username")
};

const authBasic = (username, password) => {
    return window.btoa(username + ':' + password);
}

// export const ChangePassword = async (oldPassword,newPassword,confirmPassword) => {
//     const token = authBasic(oldPassword,newPassword,confirmPassword);
//     const config = {
//         headers: {
//             Authorization: 'Basic ' + token
//         }
//     };
//     const response = await axios.get(`${urls.service}/password`, config);
//     const userDetails = response.data;

//     localStorage.setItem("username",username);
//     return userDetails;

