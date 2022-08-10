import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({ friends }) {
  const friendsItem = friends.map(({ id, avatar, name, isOnline }) => (
    <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
  ));
  return <ul className="friend-list">{friendsItem}</ul>;
}

export default FriendList;
