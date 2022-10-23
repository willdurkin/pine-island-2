import React, { useState } from 'react';
import family from '../img/family.jpeg';
import FAQs from './FAQs';
import PackingList from './PackingList'
 
const Families = () => {

	const [content, setContent] = useState('FAQs')

	const handleClick = (id) => {
		setContent(id)
		console.log('id - ', id)
	}

	return (
		<div className='body'>
			<h1>Families idshclkasjdnclkasjdn</h1>
			
			<div className='centered-content'>
				<h3>Families are a core part of the Pine Island community. Generations of Pine Islanders .... Once a Pine Islander///// Below are some helpful resources for families.

				</h3>
			</div>

			<div className="about-photo" style={{ backgroundImage: `url(${family})` }} ></div>

			<div className='centered-content '>
				<h3>Please select from the options below</h3>
				<div className='family-buttons'>
					<button
						onClick={() => handleClick('FAQs')}
					>
					FAQs
					</button>

					<button
						onClick={() => handleClick('PackingList')}
					>Packing List
					</button>

					<button
						onClick={() => handleClick('Directions')}
					>
					Directions
					</button>
				</div>

				<{content} />
				
			</div>
		</div>
	)
}

export default Families;