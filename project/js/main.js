import { qs, onSubmit } from './utilities.js';
import JobsController from './JobsController.js';

window.onload = function() {
    const newJobController = new JobsController();
    if(qs('.search-form')[0]){
        onSubmit('.search-form', newJobController.searchJobs.bind(newJobController));
    }
    if(document.getElementById('saved-jobs-el')){
        newJobController.listSavedJobs().bind(newJobController);
    }
};