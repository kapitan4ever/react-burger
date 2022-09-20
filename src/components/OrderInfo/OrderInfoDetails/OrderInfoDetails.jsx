import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ThumbnailImage } from "../../Orders/OrdersCard/ThumbnailImage/ThumbnailImage";
import styles from "./ordersInfoDetails.module.css"

export function OrderInfoDetails({details}) {
	const ingredients = useSelector((store) => store.ingredients.ingredients);

	const count = (elem) => {
		let count = details.filter((item) => {
			return item === elem;
		}).length
		return count
	}

	const orderIngredient = useMemo(() => {
		return details?.map((elem) => {
			return ingredients?.find((item) => {
				return elem._id === item._id
			})
		})
	}, [details, ingredients]);

	return (
		<div className={styles.container}>
			{orderIngredient && [...new Set(orderIngredient)].map((item) => {
				return (
					<li className={`${styles.item} pb-3`} key={item._id}>
						{item && (
							<>
								<div className={styles.info}>
									<ThumbnailImage image={item.image} alt={item.name} />
									<p className={`${styles.text} text text_type_main-default pl-4`}>{item.name}</p>
								</div>
								<div className={styles.price}>
									<p className='text text_type_digits-default pr-2'> {count(item)} x {item.type === 'bun' ? item.price * 2 : item.price}</p>
									<CurrencyIcon type="primary" />
								</div>
							</>
						)}
					</li>
				)
			})}
		</div>
	)
	
}