
import PropTypes from 'prop-types';

import FriendListItem from './Friend-list-item';

import css from './Friend-list.module.css'

const FriendList = (props) => {
  const { friends } = props;

  return (
    <ul className={css.friendList}>Friends list
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;