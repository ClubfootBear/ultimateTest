import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "c27281a1-c877-4294-ae13-c3271b2f6a40"
    }
})

const options = {
    method: 'POST',
    url: 'https://kbapi-test.oits.su/api/hospitals/bunks/multiple_change/',
    headers: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA2NDAzOTQ1LCJqdGkiOiI2MGUxMWJlOTg0YmM0Zjg2Yjc0ZjQyN2I1ODM0NWVmYyIsInVzZXJfaWQiOjQwfQ.9IoAgbpKQEzpfXnNGK7-KTUg-_iL-q2b8Tmog2roNyE'
    },
    data: {
        department_id: 20,
        count_female_busy: 15,
        count_female_o2_busy: 15,
        count_female_free: 15,
        count_female_o2_free: 15,
        count_male_busy: 15,
        count_male_o2_busy: 15,
        count_male_free: 15,
        count_male_o2_free: 15
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});