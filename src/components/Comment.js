import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLikeToStore } from '../actions/posts';

class Comment extends Component {
  handleCommentLike = () => {
    const { comment, user } = this.props;

    this.props.dispatch(addLikeToStore(comment._id, 'Comment', user._id));
  };
  render() {
    const { comment } = this.props;
    // const isCommentLikedByUser = comment.likes.includes(user._id);
    return (
      <div className="post-comment-item">
        <div className="post-comment-header">
          <span className="post-comment-author">{comment.user.name}</span>
          <span className="post-comment-time">a minute ago</span>
          <button
            style={{ cursor: 'pointer' }}
            className="post-like no-btn "
            onClick={this.handleCommentLike}
          >
            <span className="post-comment-likes">
              {comment.likes.length} likes
            </span>
          </button>
        </div>

        <div className="post-comment-content">{comment.content}</div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    user: auth.user,
  };
}

export default connect(mapStateToProps)(Comment);
