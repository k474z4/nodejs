
// Patron adaptador con wrapper
export const httpClientPlugin = {
    get: async (url: string) => {
        const res = await fetch(url);
        return await res.json();
    },

    post: async (url: string, body: any) => { },
    put: async (url: string, body: any) => { },
    delete: async (url: string) => { },

}

import axios from "axios";

export const httpAxios = {
    get: async (url: string) => {
        const { data } = await axios.get(url);
        return data;
    },

    post: async (url: string, body: any) => { },
    put: async (url: string, body: any) => { },
    delete: async (url: string) => { },

}