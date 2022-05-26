/**
 * do a querySelector lookup
 * @param  {string} selector The selector passed to querySelector
 * @return {element}     The matching element or null if not found
 */
function qs(selector) {
    return document.querySelectorAll(selector);
}
/**
 * add a touchend event listener to an element for mobile with a click event fallback for desktops
 * @param  {string} elementSelector The selector for the element to attach the listener to
 * @param {function} callback The callback function to run
 */
function onTouch(elementSelector, callback) {
    qs(elementSelector).forEach(element => {
        ['ontouch', 'click'].forEach(event => element.addEventListener(event, callback, false));
    });
}
/**
 * add an onsubmit event listener to first element (must be a form)
 * @param  {string} elementSelector The selector for the element to attach the listener to
 * @param {function} callback The callback function to run
 */
function onSubmit(elementSelector, callback) {
    qs(elementSelector)[0].addEventListener('submit', callback);
}

export {
    qs,
    onTouch,
    onSubmit
};