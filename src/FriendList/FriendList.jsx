import css from "./FriendList.module.css";
import clsx from "clsx";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={css.friendItem}>
          <div className={css.friendInfo}>
            <img src={avatar} alt={name} width="48" className={css.avatar} />
            <p className={css.name}>{name}</p>
            <p
              className={clsx({
                [css.online]: isOnline,
                [css.offline]: !isOnline,
              })}
            >
              {isOnline ? "Online" : "Offline"}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
