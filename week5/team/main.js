import HikesController from './HikesController.js';
const newHikesController = new HikesController('hikes');

window.addEventListener('load', () => {
    newHikesController.showHikeList();
    newHikesController.addHikeListener();
});
