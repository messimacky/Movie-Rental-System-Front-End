import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/movies');
}

const create = (date) => {
    return httpClient.post("/movies", data)
}


export default { getAll, create };