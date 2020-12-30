import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createComment } from '../actions/posts';
import { Comment } from './';
import { connect } from 'react-redux';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  handleAddComment = (e) => {
    const { content } = this.state;
    const { post } = this.props;
    //dispatch an action
    if (e.key === 'Enter') {
      this.props.dispatch(createComment(content, post._id));

      this.setState({
        content: '',
      });
    }
  };
  render() {
    const { post } = this.props;
    return (
      <div className="post-wrapper" key={post._id}>
        <div className="post-header">
          <div className="post-avatar">
            <Link to={`/user/${post.user._id}`}>
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-pic"
              />
            </Link>
            <div>
              <span className="post-author">{post.user.name}</span>
              <span className="post-time">a minute ago</span>
            </div>
          </div>
          <div className="post-content">{post.content}</div>

          <div className="post-actions">
            <div className="post-like">
              <img
                src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                alt="likes-icon"
              />
              <span>{post.likes.length}</span>
            </div>

            <div className="post-comments-icon">
              <img
                src="https://image.flaticon.com/icons/svg/1380/1380338.svg"
                alt="comments-icon"
              />
              <span>{post.comments.length}</span>
            </div>
          </div>
          <div className="post-comment-box">
            <input
              placeholder="Start typing a comment"
              onChange={this.handleChange}
              value={this.state.content}
              onKeyPress={this.handleAddComment}
            />
          </div>

          <div className="post-comments-list">
            {post.comments.map((comment) => (
              <Comment comment={comment} key={comment._id} postId={post._id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Post);
