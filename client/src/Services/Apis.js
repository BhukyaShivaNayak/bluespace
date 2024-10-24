import { commonrequest } from "./ApiCall"
import { BASE_URL } from "./helper"
//import axios from 'axios';

export const registerfunc = async (data, header) => {
    return await commonrequest("POST", `${BASE_URL}/user/register`, data, header);
}




export const updateRegisterfunc = async(id,data,header)=>{
    return await commonrequest("PUT",`${BASE_URL}/user/edit/${id}`,data,header);
}

export const usergetfunc = async () => {
    return await commonrequest("GET", `${BASE_URL}/user/details`, "", "");
}

export const getsingleJobfunc=async(id)=>{
    return await commonrequest("GET", `${BASE_URL}/user/${id}`, "", "");
}

export const deletefunc=async(id)=>{
    return await commonrequest("DELETE",`${BASE_URL}/user/delete/${id}`,{})
}



export const registerfunc1 = async (data, header) => {
    return await commonrequest("POST", `${BASE_URL}/user/register1`, data, header);
}


export const usergetfunc1 = async () => {
    return await commonrequest("GET", `${BASE_URL}/user/details1`, "", "");
}