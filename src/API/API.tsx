import axios from 'axios';

// const API_KEY: string = "<YOUR_API_KEY_HERE>";
// const API_ROOT: string      = `https://newsapi.org/&apiKey=${API_KEY}`;
const API_ROOT: string = "http://146.59.144.65/api";

const SIREN_TOKEN = "149c1ee8-c9e8-3986-9d60-b2f0c24c8097"
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
        url: "/ads",
    },
    {
        key: "USER",
        url: "/user"
    },
    {
        key: "USER_ADD",
        url: "/user/add"
    }
]

export const requestAPI = (method: string, entity?: string, id?: number | null, data?: [] | null, options?: { key: string, value: string }[]): any => {

    let url: string = API_ROOT;

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
            return axios.get(url)
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
            return axios.post(url, data)
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
