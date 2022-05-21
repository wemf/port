import HikeList from './HikeList.js';

// Hike Model
export default class HikeModel {
    constructor() {
        // We need a constructor...but in this case it isn't doing much
        this.hikeList = HikeList;
    }
    getAllHikes() {
        // should return a list of all the hikes.
        return this.hikeList;
    }
    getHikeByName(hikeName) {
        // filter the hikes for the record identified by hikeName and return it
        return this.hikeList.find((hike) => hike.name === hikeName );
    }
}