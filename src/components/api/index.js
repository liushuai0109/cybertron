import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// export your api as follows
// export someApi = () => {
//      // your api code here
// }

export const doSomethingAsyncRequest = () => {
    const mock = new MockAdapter(axios,{ delayResponse: 200 });
    mock.onGet('/users', {params: {searchText: 'John'}}).reply(200, {
        users: [
            {id: 1, name: 'John Smith'}
        ]
    });
    return axios.get('/users', {params: {searchText: 'John'}})
        .then(function (response) {
            console.log(response.data);
            return response;
        });
};