import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.container}>
      <img src={avatar} alt={name} width="48" className={css.image} />
      <p className={css.name}>{name}</p>
      <p className={clsx({ [css.online]: isOnline, [css.offline]: !isOnline })}>
        {isOnline ? "online" : "offline"}
      </p>
    </div>
  );
}
