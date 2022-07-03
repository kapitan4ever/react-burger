import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styleHeader from './AppHeader.module.css';

const AppHeader = () => {
	return (
		<header className={`${styleHeader.header} mt-10`}>

			<div className={styleHeader.wrapper}>
				<nav className={`${styleHeader.nav} pt-4 pb-4`}>
					<ul className={styleHeader.list}>
						<li className={`${styleHeader.item} p-5`}>
							<a className={styleHeader.link} href='#'>
								<BurgerIcon type='primary' />
								<p className='text text_type_main-default pl-2'>Конструктор</p>
							</a>
						</li>
						<li className={`${styleHeader.item} p-5 ml-2`}>
							<a className={styleHeader.link} href='#'>
								<ListIcon type="secondary" />
								<p className='text text_type_main-default text_color_inactive pl-2'>Лента заказов</p>
							</a>
						</li>
					</ul>
				</nav>
			
			<div className={`${styleHeader.logo} mt-2 mb-2`}>
				<Logo />
			</div>

			<div>
				<nav className={`${styleHeader.nav} pt-4 pb-4`}>
					<ul className={styleHeader.list}>
						<li className={styleHeader.account}>
							<a className={styleHeader.link} href='#'>
								<ProfileIcon type="secondary" />
								<p className='text text_type_main-default text_color_inactive pl-2'>Личный кабинет</p>
							</a>
						</li>
					</ul>
				</nav>
			</div>
</div>
		</header>
	)
}

export default AppHeader;