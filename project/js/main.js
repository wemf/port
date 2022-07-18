import { onSubmit } from './utilities.js';
import JobsController from './JobsController.js';

window.onload = function() {
    const newJobController = new JobsController();
    onSubmit('.search-form', newJobController.searchJobs.bind(newJobController));
};