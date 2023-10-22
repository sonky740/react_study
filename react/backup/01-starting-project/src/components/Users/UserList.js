import React from 'react';
import Card from '../UI/Card';
import styles from './UserList.module.scss';

function UserList({ users }) {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default UserList;
