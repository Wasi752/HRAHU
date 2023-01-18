const BASE_URL = 'http://localhost:3001/employees/';
export { BASE_URL, FETCH, GET};

const FETCH = (method, values, navigate, id)=> fetch(BASE_URL + id, {
    method: method,
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
})
    .then((response) => {
        navigate('/summary');
    });
const GET = (id, callBack)=>fetch(BASE_URL + id)
.then((response) => response.json())
.then(callBack);