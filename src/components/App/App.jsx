import {
  useState,
  useEffect
} from 'react';
import styleApp from './App.module.css';
import { api } from '../../utils/constants';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

const App = () => {
	const [state, setState] = useState({
		ingredients:[]
	})

	useEffect(() => {
		try {
			const getData = async () => {
				const res = await fetch(api);
				const data = await res.json();
				setState({ ...state, ingredients: data.data });
			}
	
			getData();
		} catch(error) {console.log('error')}
		}, [])

	return state.ingredients.length ? (
		<div className={`${styleApp.app}`}>
			<AppHeader />
			<main className={`${styleApp.content} mt-10`}>
				<BurgerIngredients data={state.ingredients} />
				<BurgerConstructor data={state.ingredients} />
			</main>
		</div>
	) : <></>
}

export default App;