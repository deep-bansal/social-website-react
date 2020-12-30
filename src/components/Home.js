import React, { Component } from 'react';
import { PostsList, FriendsList, Chat } from './';

class Home extends Component {
  render() {
    const { posts, friends, isLoggedin } = this.props;
    console.log('Props', this.props);
    return (
      <div className="home">
        <PostsList posts={posts} />
        {isLoggedin && <FriendsList friends={friends} />}
        <Chat />
      </div>
    );
  }
}

export default Home;
