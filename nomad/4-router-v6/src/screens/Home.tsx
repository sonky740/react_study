import { Link, useSearchParams } from 'react-router-dom';
import { users } from '../db';

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
