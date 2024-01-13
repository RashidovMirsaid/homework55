import React from 'react';

interface ButtonsProps {
	onAdd: (ingredientName: string) => void;
	onRemoveAll: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ onAdd, onRemoveAll }) => {
	return (
		<div>
			<button onClick={() => onAdd('Meat')}>Meat</button>
			<button onClick={() => onAdd('Cheese')}>Cheese</button>
			<button onClick={() => onAdd('Salad')}>Salad</button>
			<button onClick={() => onAdd('Bacon')}>Bacon</button>

			<button onClick={onRemoveAll}>Удалить все ингредиенты</button>
		</div>
	);
};

export default Buttons;
