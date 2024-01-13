import React from 'react';
import Ingredient from '../Ingedient/Ingredient';
import BreadTop from '../BreadTop/BreadTop';
import BreadBottom from '../BreadBottom/BreadBottom';
import './Burger.css';

interface BurgerProps {
	ingredients: { [key: string]: number };
}

const Burger: React.FC<BurgerProps> = ({ ingredients }) => {
	const burgerIngredientsImages = Object.entries(ingredients).map(
		([ingredientName, count]) => {
			return Array.from({ length: count }, (_, index) => (
				<Ingredient key={`${ingredientName}_${index}`} name={ingredientName} />
			));
		}
	);

	return (
		<div className='Burger'>
			<BreadTop />
			{burgerIngredientsImages}
			<BreadBottom />
		</div>
	);
};

export default Burger;
