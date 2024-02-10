import { Link, Outlet, useParams } from 'react-router-dom';
import { users } from '../../db';

export default function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1>
        Users with it {userId} is named: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">See Followers</Link>
      <Outlet
        context={{
          nameOfMyUser: users[Number(userId) - 1].name,
        }}
      />
    </div>
  );
}
