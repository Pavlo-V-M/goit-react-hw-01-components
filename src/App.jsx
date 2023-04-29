// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

// import PropTypes from 'prop-types';

import Profile from 'components/profile/Profile';
import user from 'components/profile/user.json';

import Statistics from 'components/statistics/Statistics';
import data from 'components/statistics/data.json';

import FriendList from 'components/friend-list/Friend-list';
import friends from 'components/friend-list/friends.json';

import TransactionHistory from 'components/transaction-history/Transaction-history';
import transactions from 'components/transaction-history/transactions.json';

export const App = () => { 
  return <div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />;
  </div>
};

// App.propTypes = {
//   Profile: PropTypes.object,
//   Statistics: PropTypes.object,
//   FriendList: PropTypes.object,
//   TransactionHistory: PropTypes.object,
// };
