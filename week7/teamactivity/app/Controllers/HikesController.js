import HikeModel from '../Models/HikeModel.js';
import HikesView from '../Views/HikesView.js';
import CommentsController from './CommentsController.js';

// Hike controller
export default class HikesController {
    constructor(parentId) {
        this.parentId = parentId;
        this.parentElement = document.getElementById(this.parentId);
        // this is how our controller will know about the model and view...we add them right into the class as members.
        this.hikeModel = new HikeModel();
        this.hikesView = new HikesView(this.parentId);
        this.commentsController = new CommentsController('hikes', 'commentsSection');
        this.backButton = this.buildBackButton();
    }
    
    showHikeList() {
        //  this will get called each time we need to display our full hike list. It should grab the list of hikes from the Model, and then send them to the view.
        this.hikesView.renderHikeList(this.parentElement, this.hikeModel.getAllHikes());
        this.commentsController.showCommentList();
        this.backButton.classList.add('hidden');
        this.addHikeListener();
    }

    showOneHike(hikeName) {
        // use this when you need to show just one hike...with full details
        this.hikesView.renderHikeOne(this.parentElement, this.hikeModel.getHikeByName(hikeName));
        // show the comments for just this hike
        this.commentsController.showCommentList(hikeName);
        this.backButton.classList.remove('hidden');
    }

    addHikeListener() {
        // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
        const childrenArray = Array.from(this.parentElement.children);
        childrenArray.forEach(child => {
            ['click', 'touchend'].forEach(eventType => {
                child.addEventListener(eventType, e => {
                    // why currentTarget instead of target?
                    this.showOneHike(e.currentTarget.dataset.name);
                });
            })
        });
    }

    buildBackButton() {
        const backButton = document.createElement('button');
        backButton.innerHTML = '&lt;- All Hikes';
        ['click', 'touch'].forEach(eventType => {
            backButton.addEventListener(eventType, () => {
              this.showHikeList();
            });
        })
        backButton.classList.add('hidden');
        this.parentElement.before(backButton);
        return backButton;
    }
}