import HikeModel from './HikeModel.js';
import HikesView from './HikesView.js';

// Hike controller
export default class HikesController {
    constructor(parentId) {
        this.parentElement = document.getElementById(parentId); 
        // this is how our controller will know about the model and view...we add them right into the class as members.
        this.hikeModel = new HikeModel('123');
        this.hikesView = new HikesView(this.parentElement);
    }
    
    showHikeList() {
        //  this will get called each time we need to display our full hike list. It should grab the list of hikes from the Model, and then send them to the view.
        this.hikesView.renderHikeList(this.hikeModel.getAllHikes());
    }

    showOneHike(hikeName) {
        // use this when you need to show just one hike...with full details
        
    }
    addHikeListener() {
        // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
    
    }
}