import React from "react";
import styles from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientCard from '../IngredientCard/IngredientCard';
import PropTypes from 'prop-types';


const BurgerIngredients = (props) => {

	const [current, setCurrent] = React.useState('buns')
	return (
		<section className={styles.box}>
			<h1 className="text text_type_main-large mt-10 mb-5">
				Соберите бургер
			</h1>
			<div className={styles.box_tab}>
				<Tab value="buns" active={current === 'buns'} onClick={setCurrent}>
					Булки
				</Tab>
				<Tab value="sauces" active={current === 'sauces'} onClick={setCurrent}>
					Соусы
				</Tab>
				<Tab value="fillings" active={current === 'fillings'} onClick={setCurrent}>
					Начинки
				</Tab>
			</div>
			<ul className={styles.box}>
				<li className='mt-10'>
					<h2 className="text text_type_main-medium">Булки</h2>
					<ul className={`${styles.items} custom-scroll`}>
						{props.data.filter(ingredient => ingredient.type === 'bun').map(ingredient => (<IngredientCard ingredient={ingredient} key={ingredient._id} />))}
					</ul>
				</li>
				<li className='mt-10'>
					<h2 className="text text_type_main-medium">Соусы</h2>
					<ul className={styles.items}>
						{props.data.filter(ingredient => ingredient.type === 'sauce').map(ingredient => (<IngredientCard ingredient={ingredient} key={ingredient._id} />))}
					</ul>
				</li>
				<li className='mt-10'>
					<h2 className="text text_type_main-medium">Начинки</h2>
					<ul className={styles.items}>
						{props.data.filter(ingredient => ingredient.type === 'main').map(ingredient => (<IngredientCard ingredient={ingredient} key={ingredient._id} />))}
					</ul>
				</li>
			</ul>
		</section>
	)
}

BurgerIngredients.propTypes = {
	data: PropTypes.array.isRequired
}

export default BurgerIngredients;