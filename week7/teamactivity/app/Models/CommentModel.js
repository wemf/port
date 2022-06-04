import { writeToLS, readFromLS } from '../Helpers/Localstorage.js';

class CommentModel {
    constructor(type) {
        this.type = type;
        // get the initial list of comments out of local storage if it exists
        this.comments = readFromLS(this.type) || [];
    }
    // I decided I could combine my getAllComments, and filterCommentsByName methods into one by passing in an optional query argument
    getComments(query = null) {
        if (query === null) {
            // no query, get all comments of the type
            return this.comments;
        } else {
            // comments for a specific post...filter by name
            return this.comments.filter(el => el.name === query);
        }
    }
  
    addComment(postName, comment) {
        this.comments.push({
            name: postName,
            comment: comment,
            date: new Date()
        });
        writeToLS(this.type, this.comments);
    }
}
  
export default CommentModel;