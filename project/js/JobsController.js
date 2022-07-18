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
            this.JobModel.addSavedJob(searchedJob);
            alert(`${searchedJob.title} saved`);
        }
    }

    listSavedJobs () {
        this.JobsView.renderSavedJobs(
            this.JobModel.getSavedJobs(), 
            this.deleteSavedJob.bind(this), 
            this.expandSavedJob.bind(this),
            this.saveComment.bind(this)
        );
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

    expandSavedJob (event) {
        const id = Number(event.currentTarget.dataset.id);
        const savedJob = this.JobModel.getSavedJob(id);
        const renderedJob = document.getElementById(`saved-job-${savedJob.id}`);
        if(renderedJob.style.display === 'block'){
            renderedJob.style.display = 'none';
        } else {
            renderedJob.style.display = 'block';
        }
    }

    saveComment(event) {
        event.preventDefault()
        const id = Number(event.target.id.value);
        const note = event.target.note.value;
        const newSavedJob = this.JobModel.getSavedJob(id);
        const oldComments = newSavedJob.comments ? [...newSavedJob.comments] : [];
        newSavedJob.comments = [...oldComments, {content: note, time: new Date().toISOString()}]
        this.JobModel.removeSavedJob(id);
        this.JobModel.addSavedJob(newSavedJob);
        alert('new comment saved')
        location.reload();

    }
}