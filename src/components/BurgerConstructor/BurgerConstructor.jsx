import React from "react";
import styles from './BurgerConstructor.module.css';
import {
	ConstructorElement,
	Button,
	CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorItem from '../ConstructorItem/ConstructorItem';
import PropTypes from 'prop-types';


const BurgerConstructor = (props) => {

	return (
		<section className={`${styles.box} mt-25 ml-4 mr-4`}>
			<ul>
				<li className={`${styles.bunItem} ml-8`}>
					<ConstructorElement type='top' isLocked={true} text="Краторная булка N-200i (верх)" price={20} thumbnail={props.data[0].image} />
				</li>
				<ul className={`${styles.fillingList} ml-4`}>
					{props.data.slice(1, -1).map(ingredient => (<ConstructorItem data={ingredient} key={ingredient._id} />))}
				</ul>
				<li className={`${styles.bunItem} ml-8 mt-4`}>
					<ConstructorElement type='bottom' isLocked={true} text="Краторная булка N-200i (низ)" price={20} thumbnail={props.data[0].image} />
				</li>
			</ul>
			<div className={`${styles.total} mt-10 mr-4 mb-10`}>
				<div className={`${styles.cost} mr-10`}>
					<p className='text text_type_digits-medium mr-2'>610</p>
					<CurrencyIcon type='primary' />
				</div>
				<Button type='primary' size='medium'>Оформить заказ</Button>
			</div>
		</section>

	)

}

BurgerConstructor.propTypes = {
	data: PropTypes.array.isRequired
}

export default BurgerConstructor;