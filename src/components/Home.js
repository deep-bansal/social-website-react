import React, { Component } from 'react';
import { PostsList } from './index';

class Home extends Component {
  handleUser = () => {
    console.log('hi');
  };
  render() {
    const { posts } = this.props;
    console.log('Props', this.props);
    return (
      <div className="home">
        <PostsList posts={posts} handleUser={this.handleUser} />
      </div>
    );
  }
}

export default Home;
