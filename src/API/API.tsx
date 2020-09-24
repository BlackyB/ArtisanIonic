import axios from 'axios';

const API_KEY: string = "<YOUR_API_KEY_HERE>";
// const API_ROOT: string      = `https://newsapi.org/&apiKey=${API_KEY}`;
const API_ROOT: string = "https://jsonplaceholder.typicode.com/users/1";

const Entity: { key: string, url: string }[] = [
    {
        key: "LOGIN",
        url: "/login",
    },
    {
        key: "ADS",
        url: "/ads",
    }
]

export const get = (entity?: string, id?: number, options?: { key: string, value: string }[]) => {

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

    axios.get(url)
        .then((response) => {
            return {
                status: response.status,
                statusText: response.statusText,
                data: response.data
            }
        })
}

const post = (url: string) => {
    axios.post(url)
        .then(response => response.data)
        .then((data) => {
            return ({data: data})
        })
}
