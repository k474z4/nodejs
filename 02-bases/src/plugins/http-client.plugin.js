
// Patron adaptador con wrapper
const httpClientPlugin = {
    get: async (url) => {
        const res = await fetch(url);
        return await res.json();
    },

    post: async (url, body) => { },
    put: async (url, body) => { },
    delete: async (url) => { },

}

const axios = require('axios')

const httpAxios = {
    get: async (url) => {
        const { data } = await axios.get(url);
        return data;
    },

    post: async (url, body) => { },
    put: async (url, body) => { },
    delete: async (url) => { },

}


module.exports = {
    http: httpClientPlugin,
    httpAxios,
}