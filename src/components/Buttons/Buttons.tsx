import React from 'react';
import './Buttons.css';

interface ButtonsProps {
	onAdd: (ingredientName: string) => void;
	onRemoveAll: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ onAdd, onRemoveAll }) => {
	return (
		<div className='Buttons'>
			<button onClick={() => onAdd('Meat')}>Meat</button>
			<br />
			<button onClick={() => onAdd('Cheese')}>Cheese</button>
			<br />
			<button onClick={() => onAdd('Salad')}>Salad</button>
			<br />
			<button onClick={() => onAdd('Bacon')}>Bacon</button>
			<br />
			<button onClick={onRemoveAll}>Удалить все ингредиенты</button>
		</div>
	);
};

export default Buttons;
