import React from 'react';
import Card from './card';

const CardList = ({ aliens }) => {
	const cardComponent = aliens.map((user,i) => {
		return( 
				<Card 
				key={i} 
				id={aliens[i].id} 
				name={aliens[i].name} 
				email={aliens[i].email}
				/>
			);
	})
	return(
		<div>
			{cardComponent}
		</div>
		);
}


export default CardList; 