// Comments controller
import CommentModel from "../Models/CommentModel.js";
import CommentView from "../Views/CommentsView.js";

class CommentsController {
    constructor(type, commentElementId) {
      this.type = type;
      this.commentElementId = commentElementId;
      this.model = new CommentModel(this.type);
      this.view = new CommentView;
    }
  
    addSubmitListener(postName) {
      document.getElementById('commentForm').onsubmit = (event) => {
        event.preventDefault();
        this.model.addComment(
          postName,
          document.getElementById('commentEntry').value
        );
        document.getElementById('commentEntry').value = '';
        this.showCommentList(postName);
      };
    }
    
    showCommentList(query = null) {
      try {
        const parent = document.getElementById(this.commentElementId);
        if (!parent) throw new Error('comment parent not found');
        // check to see if the commentUI code has been added yet
        if (parent.innerHTML === '') {
          parent.innerHTML = this.view.commentUI;
        }
        if (query !== null) {
          // looking at one post, show comments and new comment button
          document.querySelector('.addComment').style.display = 'block';
          this.addSubmitListener(query);
        } else {
          // no post name provided, hide comment entry
          document.querySelector('.addComment').style.display = 'none';
        }
        // get the comments from the model
        let comments = this.model.getComments(query);
        if (comments === null) {
          // avoid an error if there are no comments yet.
          comments = [];
        }
        this.view.renderCommentList(parent, comments);
      } catch (error) {
        console.log(error);
      }
    }
}

export default CommentsController;