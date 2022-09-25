import React from 'react';
import dories from '../img/dories.jpeg';


 
const Alumni = () => {

	return (
		<div className='body'>
			<h1>Alumni</h1>

			<div className="gif" style={{ backgroundImage: `url(${dories})` }} ></div>

			<div className='centered-content'>
				<h3>Stay Connected</h3>
				<p>Pine Island Camp campers and counselors are part of a large network of alumni that spans far and wide, young and old. Here we hope to provide avenues for alumni to engage with one another and to help ensure that future generations will share the same opportunities that Pine Islanders have enjoyed in the past. Please peruse the different ways you can be involved. We hope you find these tools useful.
				</p>
				<p>If you have moved recently, use this link to <a href="https://pineisland.campintouch.com/ui/forms/application/alumni/App"> update your contact information</a> 
				</p>

			</div>

			<div className='centered-content'>
				<h3>Volunteer Opportunities</h3>
				<p><strong>Sloan Critchfield Memorial Boat Maintenance Workshop Weekend · September 16-19, 2022</strong></p>
				<p>Pine Island's annual Sloan Critchfield Memorial Boat Maintenance Workshop is a volunteer event that brings alumni, campers, parents, and friends together to honor the memory of Pine Islander Sloan Critchfield by working to preserve our fleet of wooden boats. Dozens of Pine Islanders have generously given their time during Belgrade's beautiful fall to take part in this event. Everyone who has participated has loved the experience—the sense of accomplishment, the camaraderie, the food, the fall weather, and of course Great Pond.
				</p>
				<p>The work will be varied and includes: working on our fleet of wooden boats—everything from repairing gunnels and dagger board trunks, to the sanding and painting that keep our boats shipshape—light carpentry, painting, cutting firewood, landscaping, and more.
				</p>
				<p>We will provide three excellent meals per day and will be sure that you are comfortable in one of the several cabins on Pine Island. Bring a sleeping bag, a towel, some work clothes, and work gloves and join us for some great times in September on Pine Island. Volunteers are welcome to come for the day or for the whole weekend. The first meal will be dinner on Friday and the last meal will be breakfast on Monday.
				</p>
				<p>If you're interested in joining us for the Sloan Critchfield Memorial Boat Maintenance Workshop, please contact our Operations Director, Miles Frank at mfrank@pineisland.org. Thank you!
				</p>

			</div>

			<div className='centered-content'>
				

				<h3>The Pine Needle</h3>
				<p>
				The Pine Needle, published every winter, is the annual newsletter of Pine Island Camp whose origins go back to the camp's earliest days.  Since 2007, we have also been producing an on-line Mid-Summer Pine Needle. Produced entirely by Pine Island Campers in the middle of the camp season, it offers a wonderful glimpse into the spirit and activities of each Pine Island summer while it is in progress.
				</p>
				<p>
				The following issues of the Pine Needle are available to download as Adobe PDFs.  To receive the Pine Needle by mail, please contact us.
				</p>
				<ul>
					<p>The Mid-Summer Pine Needle 2021</p>
					<p>The Pine Needle February 2021</p>
				</ul>
				<p>
				Some back issues of the Pine Needle and Mid-Summer Pine Needle are available as Adobe PDFs in the Pine Needle Archive.
				</p>
			</div>
		</div>

	)
}

export default Alumni;