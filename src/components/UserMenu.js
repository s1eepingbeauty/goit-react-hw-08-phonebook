import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../redux/auth/auth-selectors';
import { logOut } from '../redux/auth/auth-operations';
import defaultAvatar from '../img/default-avatar.png';

const UserMenu = () => {
  const name = useSelector(getUserName);
  const avatar = defaultAvatar;
  const dispatch = useDispatch();

  return (
    <div>
      <img src={avatar} alt="user avatar" width="30" />
      <span>Welcome, {name}!</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
