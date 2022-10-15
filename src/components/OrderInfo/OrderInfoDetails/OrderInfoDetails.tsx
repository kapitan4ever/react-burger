import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo, FC } from "react";
//import { useSelector } from "react-redux";
import { useSelector } from "../../../services/hooks";
import { TIngredient } from "../../../services/types/data";
import { ThumbnailImage } from "../../Orders/OrdersCard/ThumbnailImage/ThumbnailImage";
import styles from "./ordersInfoDetails.module.css";
import { nanoid } from "nanoid";

type TOrdersInfoDetails = {
	details: TIngredient[];
}

export const OrderInfoDetails: FC<TOrdersInfoDetails> = ({details}) => {
	const ingredients = useSelector((store) => store.ingredients.ingredients);

	const count = (elem: object) => {
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
					<li className={`${styles.item} pb-3`} key={nanoid()}>
						{item && (
							<>
								<div className={styles.info}>
									<ThumbnailImage image={item.image} alt={item.name} key={nanoid()}/>
									<p className={`${styles.text} text text_type_main-default pl-4`}>{item.name}</p>
								</div>
								<div className={styles.price}>
									<p className='text text_type_digits-default pr-2'> {count(item)} x {item.type === 'bun' ? item.price * 2 : item.price}</p>
									<CurrencyIcon type="primary" key={nanoid()}/>
								</div>
							</>
						)}
					</li>
				)
			})}
		</div>
	)
	
}