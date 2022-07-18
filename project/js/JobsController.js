import JobModel from './JobModel.js';
import JobsView from './JobsView.js';

export default class JobsController {
    constructor () {
        this.JobModel = new JobModel();
        this.JobsView = new JobsView();
    }

    async searchJobs (event) {
        event.preventDefault();
        try {
            this.JobsView.searchResults.innerHTML = '';
            this.JobsView.searchResults.innerHTML = `<div class="lds-container"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>`;
            const jobs = await this.JobModel.searchJobs(this.JobsView.input.value);
            this.JobsView.renderJobs(jobs, this.storeJob.bind(this));
        } catch (err) {
            this.JobsView.searchResults.innerHTML = '';
            console.error(err)
        }
    }

    async storeJob (event) {
        event.preventDefault();
        const id = Number(event.currentTarget.dataset.id);
        const savedJob = this.JobModel.getSavedJob(id);
        // if job exists, remove it from storage
        if(savedJob){
            this.JobModel.removeSavedJob(id);
        } 
        // else, get it from searched jobs and save it to storage
        else { 
            const searchedJob = this.JobModel.getJob(id);
            this.JobModel.setSavedJob(searchedJob);
        }
    }
}