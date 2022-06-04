export function writeToLS(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
}
  
export function readFromLS(key) {
    return JSON.parse(window.localStorage.getItem(key));
}