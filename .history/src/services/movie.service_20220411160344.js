import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/movies');
}

const create = (data) => {
    return httpClient.post("/movies", data)
}

const get = id => {
    return httpClient.get(`/movies/${id}`);
}

const update = (data) => {
    return httpClient.put('/movies', data);
}

const remove = id => {
    return httpClient.delete(`movies/${id}`);
}

export default { getAll, create, get, update, remove };