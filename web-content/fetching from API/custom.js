/* Example HTTP requests using the custom fetch function */

// GET:
customFetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/foods', "GET").then(res => console.log(res));
// POST:
// customFetch('https://reqres.in/api/users', "POST", { name: "John"} ).then(res => console.log(res));
// PUT:
// customFetch('https://reqres.in/api/users/2', "PUT", { name: "Sally"} ).then(res => console.log(res));
// DELETE:
// customFetch('https://reqres.in/api/users/2', "DELETE").then(res => console.log(res));

/* Custom fetch function that returns a promise */

function customFetch(url, type, data) {

    /* GET */
    if (type === "GET") {
    return fetch(url, {
    method: type,
    headers: {
        'Content-type': 'application/json'
    }
    })
    .then(res => {
        if (res.ok) { console.log("HTTP request successful") }
        else { console.log("HTTP request unsuccessful") }
        return res
    })
    .then(res => res.json())
    .then(data => data)
    .catch(error => error)
    }
 
    /* DELETE */
    if (type === "DELETE") {
    return fetch(url, {
    method: type,
    headers: {
        'Content-type': 'application/json'
    }
    })
    .then(res => {
        if (res.ok) { console.log("HTTP request successful") }
        else { console.log("HTTP request unsuccessful") }
        return res
    })
    .catch(error => error)
    }
 
    /* POST or PUT */
    if (type === "POST" | type === "PUT") {
    return fetch(url, {
    method: type,
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(res => {
        if (res.ok) { console.log("HTTP request successful") }
        else { console.log("HTTP request unsuccessful") }
        return res
    })
    .then(res => res.json())
    .then(data => data)
    .catch(error => error)
    }
}