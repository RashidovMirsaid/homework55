import React, { useState } from 'react';
import Burger from '../Burger/Burger';
import Buttons from '../../components/Buttons/Buttons';
import meat from '../../assets/ingredients/meat.png';
import salad from '../../assets/ingredients/salad.png';
import becon from '../../assets/ingredients/becon.png';
import cheese from '../../assets/ingredients/cheese.png';

export interface Ingredient {
	name: string;
	price: number;
	image: string;
}

const INGREDIENTS: Ingredient[] = [
	{ name: 'Meat', price: 80, image: `${meat}` },
	{ name: 'Cheese', price: 50, image: `${cheese}` },
	{ name: 'Salad', price: 10, image: `${salad}` },
	{ name: 'Bacon', price: 60, image: `${becon}` },
];

const BurgerBuilder: React.FC = () => {
	const [ingredients, setIngredients] = useState<{ [key: string]: number }>({});

	const addIngredient = (ingredientName: string) => {
		setIngredients((prevIngredients) => ({
			...prevIngredients,
			[ingredientName]: (prevIngredients[ingredientName] || 0) + 1,
		}));
	};

	const removeAllIngredients = () => {
		setIngredients({});
	};

	const calculateTotalPrice = () => {
		const basePrice = 30;
		const totalPrice = Object.keys(ingredients).reduce(
			(total, ingredientName) => {
				const ingredient = INGREDIENTS.find(
					(item) => item.name === ingredientName
				);
				if (ingredient) {
					return total + ingredient.price * ingredients[ingredientName];
				}
				return total;
			},
			basePrice
		);

		return totalPrice;
	};

	return (
		<div className='BurgerBuilder'>
			<Buttons onAdd={addIngredient} onRemoveAll={removeAllIngredients} />
			<p>Общая стоимость: {calculateTotalPrice()} сом</p>
			<Burger ingredients={ingredients} />
		</div>
	);
};

export default BurgerBuilder;
