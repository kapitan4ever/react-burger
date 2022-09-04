import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styleHeader from "./AppHeader.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";

const AppHeader = () => {
	const location = useLocation();
  return (
    <header className={`${styleHeader.header} mt-5`}>
      <div className={styleHeader.wrapper}>
        <nav className={styleHeader.nav}>
          <ul className={styleHeader.list}>
            <li className={`${styleHeader.item} p-5`}>
              <NavLink to="/" exact className={styleHeader.link} activeClassName={styleHeader.activeLink}>
                <BurgerIcon type={location.pathname === '/' ? 'primary' : 'secondary'} />
                <span className="text text_type_main-default pl-2">Конструктор</span>
              </NavLink>
            </li>
            <li className={`${styleHeader.feed} p-5 ml-2`}>
              <NavLink to="/feed" className={styleHeader.link} activeClassName={styleHeader.activeLink}>
                <ListIcon type={location.pathname === '/feed' ? 'primary' : 'secondary'} />
                <span className="text text_type_main-default pl-2">
                  Лента заказов
                </span>
              </NavLink>
            </li>

            <li>
              <Link to="/" exact>
                <Logo />
              </Link>
            </li>

            <li className={styleHeader.account}>
              <NavLink to="/profile" className={styleHeader.link}  activeClassName={styleHeader.activeLink}>
                <ProfileIcon type={location.pathname === '/profile' || location.pathname === '/profile/orders' ? 'primary' : 'secondary'} />
                <span className="text text_type_main-default pl-2">
                  Личный кабинет
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
