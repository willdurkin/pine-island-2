import React from 'react';
import mail from '../img/mail.jpeg';

const Contact = () => {
	return (
		<div className='body'>
				
			<div className='centered-content'>
				<h1>Get in Touch</h1>
				<p>Pine Island Camp campers and counselors are part of a large network of alumni that spans far and wide, young and old. Here we hope to provide avenues for alumni to engage with one another and to help ensure that future generations will share the same opportunities that Pine Islanders have enjoyed in the past. Please peruse the different ways you can be involved. We hope you find these tools useful.
				</p>
			</div>
			<div className="gif" style={{ backgroundImage: `url(${mail})` }} ></div>
			<div className='centered-content'>
				<p>If you have moved recently, send an email to Sarah at shunter@pineisland.org with your current mailing address. Please include your years at camp so we can check our records for accuracy.
				</p>
				<p>If you have a success or life event that you would like to share, please email Ben at benswan@pineisland.org. We include many alumni updates in the Needle News Briefs of the Pine Needle.
				</p> 
				<ul>
					<li>email/address/phone/names/etc</li>
					<li>Join Our Email List</li>
					<li>LinkedIn/other social media</li>
					<li>Update your info</li>
					<li>Subscribe to Needle</li>
					<li>Submit an update for the Needle</li>
				</ul>
			</div>
		</div>

	)
}

export default Contact;