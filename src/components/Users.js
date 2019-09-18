import React from 'react';

const Users = ({ posts, ...props }) => {
  const users = Object.values(props.users);

  const getPostCount = userId => {
    return posts.filter(post => {
      return post.userId === userId;
    }).length;
  };

  return (
    users.length > 0 && (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Posts Count</th>
            </tr>
          </thead>

          <tbody>
            {users.map(user => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{getPostCount(user.id)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  );
};

export default Users;
