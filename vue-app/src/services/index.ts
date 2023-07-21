// import { getCookieByName } from '../constants';
import { Api } from './myApi';

const service = new Api({
    baseUrl: 'http://localhost:3000',
    baseApiParams: {
        headers: {
            // 'Content-Type': 'application/json',
            // accept: 'application/json',
            ContentType: 'multipart/form-data',
            // Authorization: Bearer ${getCookieByName('token')}
        }
    }
});

export default service;