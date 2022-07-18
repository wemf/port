export function getJSON(url) {
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function(error) {
            console.error(error);
        });
}
export function qs(selector) {
    return document.querySelectorAll(selector);
}

export function onTouch(elementSelector, callback) {
    qs(elementSelector).forEach(element => {
        ['ontouch', 'click'].forEach(event => element.addEventListener(event, callback, false));
    });
}

export function onSubmit(elementSelector, callback) {
    qs(elementSelector)[0].addEventListener('submit', callback);
}

export function readFromLS(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function writeToLS(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
