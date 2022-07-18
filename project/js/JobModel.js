import { getJSON, readFromLS, writeToLS } from "./utilities.js";
// Job Model
export default class JobModel {
  constructor() {
    this.baseUrl = "https://remotive.com/api/remote-jobs";
    this._jobs = [];
    this._savedJobs = readFromLS('SAVED_JOBS') || [];
  }

  async searchJobs(query, limit = 20) {
    const resp = await await getJSON(`${this.baseUrl}?search=${query}&limit=${limit}`);
    this._jobs = resp.jobs;
    return this._jobs;
  }

  setJob(job) {
    this._jobs = [...this._jobs, job];
  }

  getJobs() {
    return this._jobs;
  }

  getJob(id) {
    return this._jobs.find(job => job?.id === id);
  }

  addSavedJob(job) {
    this._savedJobs = [job, ...this._savedJobs];
    writeToLS('SAVED_JOBS', this._savedJobs);
  }

  removeSavedJob (id) {
    this._savedJobs = this._savedJobs.filter(job => job.id !== id);
    writeToLS('SAVED_JOBS', this._savedJobs);
  }

  getSavedJobs() {
    return this._savedJobs;
  }

  getSavedJob(id) {
    return this._savedJobs.find(job => job?.id === id);
  }

}