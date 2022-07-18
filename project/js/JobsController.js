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
            this.JobsView.renderLoading();
            const jobs = await this.JobModel.searchJobs(this.JobsView.input.value);
            this.JobsView.renderJobs(jobs, this.storeJob.bind(this));
        } catch (err) {
            this.JobsView.clearRender();
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
            alert(`${savedJob.title} removed`);
        } 
        // else, get it from searched jobs and save it to storage
        else { 
            const searchedJob = this.JobModel.getJob(id);
            this.JobModel.setSavedJob(searchedJob);
            alert(`${searchedJob.title} saved`);
        }
    }

    listSavedJobs() {
        this.JobsView.renderSavedJobs(this.JobModel.getSavedJobs(), this.deleteSavedJob.bind(this));
    }

    deleteSavedJob (event) {
        const id = Number(event.currentTarget.dataset.id);
        const savedJob = this.JobModel.getSavedJob(id);
        // if job exists, remove it from storage
        if(savedJob){
            this.JobModel.removeSavedJob(id);
            this.listSavedJobs();
            alert(`${savedJob.title} removed`);
        }
    }
}