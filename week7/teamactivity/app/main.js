import HikesController from './Controllers/HikesController.js';
const newHikesController = new HikesController('hikes');

window.addEventListener('load', () => {
    newHikesController.showHikeList();
});
