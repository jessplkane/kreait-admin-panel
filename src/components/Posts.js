import React from 'react';

const Posts = ({ posts, users }) => {
  if (posts.length === 0) {
    return null;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>User</th>
        </tr>
      </thead>

      <tbody>
        {posts.map(post => {
          return (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{users[post.userId].name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Posts;
