import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/rentals');
}

const create = (data) => {
    return httpClient.post("/rentals", data)
}

const get = id => {
    return httpClient.get(`/rentals/${id}`);
}

const update = (data) => {
    return httpClient.put('/rentals', data);
}

const remove = id => {
    return httpClient.delete(`/rentals/${id}`);
}

export default { getAll, create, get, update, remove };