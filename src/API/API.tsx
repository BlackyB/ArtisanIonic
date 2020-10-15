import axios from 'axios';

const API_ROOT: string = "http://146.59.144.65/api";

const SIREN_TOKEN = "40d6f9cf-e6c5-3ef0-b1c4-a23893288fc0"
export const SIREN_HEADERS = {
    headers: {Authorization: `Bearer ${SIREN_TOKEN}`}
};

const Entity: { key: string, url: string }[] = [
    {
        key: "LOGIN",
        url: "/user/login",
    },
    {
        key: "LOCATION",
        url: "/location",
    },
    {
        key: "ADS",
        url: "/ad/ads",
    },
    {
        key: "RECENT_ADS",
        url: "/ad/recent_ads",
    },
    {
        key: "AD",
        url: "/ad",
    },
    {
        key: "MY_ADS",
        url: "/ad/myAd",
    },
    {
        key: "AD_ADD",
        url: "/ad/add",
    },
    {
        key: "USER",
        url: "/user"
    },
    {
        key: "USER_ADD",
        url: "/user/add"
    },
    {
        key: "IMAGE",
        url: "/image/add"
    }
]

export const requestAPI = (method: string, entity?: string, id?: number | null, data?: null | FormData | [], options?: { key: string; value: string }[], apiKey: boolean = false): any => {

    let url: string = API_ROOT;

    let config;
    
    if(apiKey)
    {
        let auth: string| null = null
        if(localStorage.getItem('user')){
            // @ts-ignore
            let user = JSON.parse(localStorage.getItem('user'));
            auth = user.token
        }
        config = {headers: {'X-AUTH-TOKEN': auth}}
    }
    else
    {
        config = undefined
    }


    if (entity) {
        let endpoint_filter: { key: string; url: string; }[] = Entity.filter((item) => {
            return item.key === entity
        })

        url += endpoint_filter[0]?.url;
    }

    if (id) url += '/' + id

    if (options) {
        options.map((option, index) => {
            index === 0 ? url += `?${option.key}=${option.value}` : url += `&${option.key}=${option.value}`
            return url
        })
    }

    switch (method) {
        case "GET":
            return axios.get(url, config)
                .then((response) => {
                    return {
                        status: response.status,
                        statusText: response.statusText,
                        data: response.data
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

        case "POST" :
            return axios.post(url, data, config)
                .then((response) => {
                    return {
                        status: response.status,
                        statusText: response.statusText,
                        data: response.data
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
    }
}
