import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/movies');
}

const create = (data) => {
    return httpClient.post("/movies", data)
}

const get = id => {
    httpClient.get(`/movies/&{id}`);
}

const update = (data) => {
    return httpClient.put('/movies', data)
}

export default { getAll, create };