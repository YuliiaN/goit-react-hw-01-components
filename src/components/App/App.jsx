import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import Friends from '../Friends/Friends';
import TransactionHistory from 'components/TransactionHistory/TranstactionHistory';
import user from 'data/user.json';
import stats from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={stats} />
      <Statistics stats={stats} />

      <Friends friends={friends} />

      <TransactionHistory transactions={transactions} />
    </>
  );
};
