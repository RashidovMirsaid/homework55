import React from 'react';

interface IngredientProps {
	name: string;
}

const Ingredient: React.FC<IngredientProps> = ({ name }) => (
	<div className={name}>
		<span></span>
	</div>
);

export default Ingredient;
