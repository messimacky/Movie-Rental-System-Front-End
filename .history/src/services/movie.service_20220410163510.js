import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/movies');
}


export default { getAll };