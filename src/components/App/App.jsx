import styleApp from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import ingredients from '../../utils/data';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';


const App = () => {
	return (
		<div className={`${styleApp.app}`}>
			<AppHeader />
			<main className={`${styleApp.content} mt-10`}>
				<BurgerIngredients data={ingredients}/>
				<BurgerConstructor data={ingredients}/>
			</main>
		</div>
	)
}

export default App;