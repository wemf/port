  // commentsView
export default class CommentView {
    constructor(commentUI) {
        // will need this
        this.commentUI = commentUI || `
        <div class="addComment">
            <h2>Add a comment</h2>
            <form id="commentForm"">
                <input type="text" id="commentEntry" />
                <button type="submit">Comment</button>
            </form>
        </div>
        <h2>Comments</h2>
        <ul class="comments"></ul>
        `;
    }

    renderCommentList(element, comments) {
        const renderList = element.querySelector('ul');
        // clear out any comments that might be listed
        renderList.innerHTML = '';
        // add the new list of comments
        comments.forEach(el => {
            let item = document.createElement('li');
            item.innerHTML = `${el.name}: ${el.comment}`;
            renderList.appendChild(item);
        });
    }
}