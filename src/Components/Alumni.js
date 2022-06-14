import React from 'react';
import dories from '../img/dories.jpeg';


 
const Alumni = () => {

	return (
		<div className='body'>
			<h1>Alumni</h1>

			<div className="gif" style={{ backgroundImage: `url(${dories})` }} ></div>
			<div className='centered-content'>
				

				<h3>The Pine Needle</h3>
				<p>
				The Pine Needle, published every winter, is the annual newsletter of Pine Island Camp whose origins go back to the camp's earliest days.  Since 2007, we have also been producing an on-line Mid-Summer Pine Needle. Produced entirely by Pine Island Campers in the middle of the camp season, it offers a wonderful glimpse into the spirit and activities of each Pine Island summer while it is in progress.
				</p>
				<p>
				The following issues of the Pine Needle are available to download as Adobe PDFs.  To receive the Pine Needle by mail, please contact us.
				</p>
				<ul>
					<li>The Mid-Summer Pine Needle 2021</li>
					<li>The Pine Needle February 2021</li>
				</ul>
				<p>
				Some back issues of the Pine Needle and Mid-Summer Pine Needle are available as Adobe PDFs in the Pine Needle Archive.
				</p>
			</div>
		</div>

	)
}

export default Alumni;