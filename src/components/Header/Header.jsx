import siteLogo from "../../images/echogliph-logo.png";
import { BiSearch, BiMenu, BiBell } from "react-icons/bi";
import style from "./header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.header__navigation}>
        <a href="/" className={style.header__logo}>
          <img src={siteLogo} alt="EchoGliph Logo" />
        </a>
        <div className={style.header__search}>
          <input
            type="text"
            placeholder="Search..."
            className={style.header__searchInput}
          />
          <button
            className={style.header__searchButton}
            type="button"
            aria-label="Search"
          >
            <BiSearch size={20} />
          </button>
        </div>
        <ul className={style.header__managment}>
          <li className={style.header__managmentItem}>
            <button className={style.header__managmentButton} aria-label="Menu">
              <BiMenu size={20} />
            </button>
          </li>
          <li className={style.header__managmentItem}>
            <button
              className={style.header__managmentButton}
              aria-label="Notifications"
            >
              <BiBell size={20} />
            </button>
          </li>
        </ul>
        <div className={style.header__avatarBox}>
          <button className={style.header__avatar} aria-label="User profile">
            {/* Тут може бути аватар користувача */}
          </button>
        </div>
      </nav>
    </header>
  );
};
