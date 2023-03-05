import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';

export const App = () => {
  return (
    <div
      style={
        {
          // height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // fontSize: 40,
          // color: '#010101',
        }
      }
    >
      <Profile user={user} />
      <Statistics data={data} title="Upload stats" />
      <FriendList friends={friends} />
    </div>
  );
};
