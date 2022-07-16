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
            console.log(error);
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
