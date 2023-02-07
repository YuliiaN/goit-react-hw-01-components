import PropTypes from 'prop-types';
import css from './Friends.module.css';

const Friends = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={css.item} key={id}>
            <span className={isOnline ? css.active : css.notActive}>
              {isOnline}
            </span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Friends;
