import React from 'react';

const AsideRecentPosts = ({ recentFivePosts }) => {
  return (
    <div>
      <div>AsideRecentPosts</div>
      {recentFivePosts.map((post, idx) => (
        <div key={idx}>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
};

export default AsideRecentPosts;
