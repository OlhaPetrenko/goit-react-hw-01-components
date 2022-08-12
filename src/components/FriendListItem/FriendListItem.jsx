import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  const spanClasses = [s.status];
  if (isOnline) {
    spanClasses.push(s.offline);
  }
  return (
    <li className={s.item}>
      <span className={spanClasses.join(' ')}></span>
      <img src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
