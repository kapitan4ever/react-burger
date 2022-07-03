import styles from './IngredientCard.module.css'
import {
	CurrencyIcon,
	Counter
} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

const IngredientCard = (props) => {

	return (
		<li className={`${styles.item} mt-6 ml-4`}>
			<Counter count={props.ingredient._v} size='small' />
			<img className='ml-4 mr-4 mb-1' src={props.ingredient.image} alt={props.ingredient.name} />
			<div className={styles.price}>
				<p className='text text_type_digits-default mr-2'>{props.ingredient.price}</p>
				<CurrencyIcon type='primary' />
			</div>
			<p className={`${styles.title} text text_type_main-default mt-1`}>{props.ingredient.name}</p>
		</li>
	)
}

IngredientCard.propTypes = {
	ingredient: PropTypes.shape({
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	}).isRequired
}

export default IngredientCard