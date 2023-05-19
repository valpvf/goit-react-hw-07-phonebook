import axios from "axios";

// /:endpoint
axios.defaults.baseURL = 'https://6466a9152ea3cae8dc1c0dce.mockapi.io/contacts'

export const addContactApi = contact => {
    return axios.post('contacts', contact)
        .then(res => {
            const { data } = res;
            return data;
        });
}