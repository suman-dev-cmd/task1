import * as CONSTANT from './constant';

export const get = async (param) => {
    try {
        const res = await fetch(CONSTANT.URL + param, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        let data = await res.json()
        return data;
    } catch (error) {
        return error.response;
    }
}

export const post = async (param, data) => {
    try {
        const res = await fetch(CONSTANT.URL + param,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        let data1 = await res.json()
        return data1;
    } catch (error) {
         return error.response;
    }
}

export const put = async (param, data) => {
    try {
        const res = await fetch(CONSTANT.URL + param,{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        let data1 = await res.json()
        return data1;
    } catch (error) {
         return error.response;
    }
}

export const deletei = async (param) => {
    try {
        const res = await fetch(CONSTANT.URL + param, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
           
        })
        return res;
    } catch (error) {
        return error.response;
    }
}