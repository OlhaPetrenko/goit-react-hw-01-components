import PropTypes from 'prop-types';

import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  const friendsItem = friends.map(({ id, avatar, name, isOnline }) => (
    <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
  ));
  return (
    <div className={s.sectionFtiends}>
      <div className="container">
        <ul className={s.friendLlist}>{friendsItem}</ul>;
      </div>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
