import React from 'react';
import campPhoto from '../img/camp-photo.jpeg';
import sumner from '../img/staff/sumner-ford-v2.jpeg';
import ben from '../img/staff/ben-and-emily.jpeg';
import sam from '../img/staff/sam-hecklau.jpeg';
import sarah from '../img/staff/sarah-hunter.jpeg';
import lindsay from '../img/staff/lindsay-clarke-v1.jpeg';
import miles from '../img/staff/miles-frank.jpeg';

 
const Staff = () => {

	return (
		<div className='body'>

			<div className='centered-content'>
				<h1>Staff</h1>

				<h3> Pine Island’s success is derived from the counselors and staff who teach, counsel, and lead every summer. </h3> 
				<h3>Pine Island’s staff must be multi talented, creative, and energetic to take on the everchanging elements of a day at camp.  Every day brings new challenges, excitement, and learning opportunities.
				</h3> 
			</div>

			<div className="centered-image" style={{ backgroundImage: `url(${campPhoto})` }} />

			<div className='centered-content'>

				<p>Pine Islands staff can connect with Pine Island’s impressive alumni network.  To succeed at Pine Island speaks volumes about the character and qualities of a person, and Pine Island’s alums enjoy hiring and mentoring those who excel as staff.
				</p>

				<p>While many of our counselors and staff were campers, we’re always excited to involve new people in our community.</p>

				<p>If you are interested in working at Pine Island, please complete the   
				<a href="https://pineisland.campintouch.com/ui/forms/application/staff/App">following application</a>.</p>
				<p>If you have any questions, please contact Director Sumner Ford at sford@pineisland.org
				</p>
			</div>

			<div className='centered-content'>

				<h1>Leadership</h1>
				<h3>Director</h3>
				<p>Sumner Ford | <i>sford@pineisland.org</i></p>
				<img src={sumner} />
				<p>
					After a year of searching for the perfect summer camp, Sumner first set foot on PIC for the 2000 summer as a nine-year-old. He quickly fell in love with Pine Island, returning for the next six summers as a camper. Sumner's first year on staff was as a fly-fishing instructor in 2009, and his summers have been spent at Pine Island ever since.
				</p>
				<p>
					After teaching fly-fishing, Sumner became one of Pine Island's Expedition Camp directors and then served as assistant director from 2014 through 2018. In 2019, Sumner transitioned into the role of Director. He is Pine Island's sixth director in nearly 120 years. Sumner brings much to this role: a deep love of camping and the outdoors, seemingly endless patience with boys and staff, proven leadership skills, a lively and slightly mischievous sense of humor, a love of reading and ideas, and a deep appreciation of all the traditions and quirks that make Pine Island unique and so valuable. In short, Pine Island is lucky to have handed the helm to such an able and thoughtful person.
					</p>
				<p>
					Sumner studied at St. Lawrence University, earning his B.S. in Environmental Geology and serving as a leader of the outing club. He currently resides in Richmond, Vermont during the off-season.
					</p>
			</div>

			<div className='centered-content'>
				<h3>Executive Director</h3>
				<p>Ben Swan| <i>benswan@pineisland.org</i></p>
				<img src={ben} />
				<p>
					Ben Swan was born during the 1955 camp season, and he has been connected with Pine Island in some capacity ever since. He spent his childhood at Pine Island, was a camper and then a counselor, and he ran the Pine Island Whitehead program for one summer. He continued as a member of Pine Island Camp's board of directors, returning to the staff in 1988 as assistant director. He assumed the post of director in 1990 and served in that capacity for thirty years. Since handing the helm to Sumner Ford, Ben has become Pine Island's executive director and continues to serve as editor of the Pine Needle.
				</p>
				<p>
					Ben's family's involvement with Pine Island Camp dates to 1908, when his grandfather purchased the fledgling institution, and he was the third generation of his family to serve as Pine Island's director. Ben has a B.A. in English from Washington & Lee University and an M.A. in English from the University of Virginia. He was a teacher at Episcopal High School in Alexandria, Virginia for several years before returning to Maine to work for Pine Island.
					</p>
			</div>

			<div className='centered-content'>
				<h3>Business Manager</h3>
				<p>Emily Swan| <i>eswan@pineisland.org</i></p>
				<p>
				Emily married Ben Sawn in 1987 and has been a key part of the Pine Island Camp community ever since. In 1990, she assumed the role of business manager. After 30 years of overseeing the details of running the camp and serving as the voice at the other end of the phone line during the Pine Island season, she is moving away from active involvement with camp during the summer while continuing to work on administrative matters during the off-season. Emily has a B.A. in history from the University of the South at Sewanee and a J.D. from Harvard Law School. Emily and Ben raised their children Harry, Rip and Katie in Brunswick, Maine. Emily is president of the board of the Brunswick-Topsham Land Trust, and she volunteers assisting local asylum seekers, with the local library, and with the League of Women Voters registering new voters at naturalization ceremonies and other public events. She has been an enthusiastic member of her book group in Brunswick for almost 30 years!
				</p>
			</div>

			<div className='centered-content'>
				<h3>Director of Communications</h3>
				<p>Sarah Hunter| <i>shunter@pineisland.org</i></p>
				<img src={sarah} />
				<p>
					Sarah joined Pine Island Camp in the fall of 2009 and soon became an indispensable member of the Pine Island team. She keeps the camp community informed with monthly newsletters and communicates with current and prospective camp families throughout the year. She also manages our database, coordinates our travel schedule, and performs numerous other tasks to ensure camp runs smoothly. Sarah is currently in the process of assuming the role of chief administrator. She has a B.A. in American Studies from the University of New England. Like many Pine Islanders, she has a lifelong love of the outdoors.</p>
					<p> Sarah has hiked all 67 of the highest mountains in Maine, New Hampshire, and Vermont - many of them in winter - and is working to ascend the hundred highest mountains in New England. She hikes with her husband, Jason, and their sons Caleb and Silas, who are both PIC alums, and with trips she leads as a volunteer leader for the Maine Chapter of the Appalachian Mountain Club. Sarah is also passionate about bike travel and has designed and embarked on several self-supported long-distance bike tours with her family. A few of their tours have been featured by Adventure Cycling Association, a non-profit whose mission is to inspire and empower people to travel by bicycle. When they're not off on hiking or cycling adventures, Sarah and her family are at home in Durham, Maine.

				</p>
			</div>

			<div className='centered-content'>
				<h3>Operations Director</h3>
				<p>Miles Frank | <i>mfrank@pineisland.org</i></p>
				<img src={miles} />
				<p>
					Miles currently serves as Pine Island's director of operations. In this role he is responsible for the upkeep of Pine Island's boats, vehicles, and facilities on Great Pond, at Whitehead Light Station, and at Norridgewock, and for oversight of the Leadership Training Internship Program (LTIP).
					</p>
					<p> Beginning in 2008, Miles enjoyed several years as a Pine Island camper, joined by his two younger brothers. As a counselor, Miles led Pine Island's woodcraft program, teaching boys the essentials of backcountry camping skills. Since his time as a counselor, Miles has passionately led the Leadership Training Internship Program and headed many projects and renovations.
				</p>
				<p>
				He earned a B.A. in Environmental History and Philosophy from Fordham University. He remains an avid reader of history. In his leisure, he can be found working with wood and a variety of other mediums, or out and about enjoying the outdoors.
				</p>
			</div>

			<div className='centered-content'>
				<h3>Summer Manager</h3>
				<p>Lindsay Clarke</p>
				<img src={lindsay} />
				<p>
				Long-time Pine Islander Lindsay Clarke took the reins of the summer manager position in 2021, a role previously filled by Emily Swan. Lindsay is no stranger to Pine Island. She was PIC's head swimming counselor for five years and an assistant director for one. For several years, she ran a nonprofit organization that partnered with local communities to promote education and economic development in Cameroon, and since 2007 has been a middle and high school history teacher at Waynflete School in Portland, Maine. Lindsay lives in Portland with her daughter Sagan and son Silas.
					</p>
			</div>

			<div className='centered-content'>
				<h3>Director of Pine Island's Whitehead Island Program</h3>
				<p>Sam Hecklau</p>
				<img src={sam} />
				<p>
					Sam Hecklau grew up in the small town of Clinton in upstate New York, where he spent much of his free time playing in the woods and creeks that ran behind his house - swimming, building forts, climbing trees, fishing, and generally enjoying what nature had to offer. Sam's enjoyment and appreciation of the outdoors developed into a passion for activities such as hiking, camping, photography, sculpture, fly fishing, and skiing. It was also one of the factors that led him to attend St. Lawrence University. While at St. Lawrence, Sam studied geology and visual art and became a certified guide for the school's Outdoor Program and a trip leader for the Outing Club. St. Lawrence is also where Sam met a fine gentleman from Woodstock, VT who shared his sense of adventure, a quick wit, and a love for pursuing creative ideas. Over the course of many shared skiing, fishing, canoeing, and camping outings with Sumner Ford, a lasting friendship developed.
					</p>
					<p> Following his graduation from St. Lawrence and inspiration from Sumner, Sam spent his first summer at Pine Island in 2016. He returned in 2018 as the assistant director of Pine Island's program at Whitehead Island. There he worked alongside 22-year veteran director Anne Stires, learning the details of the Whitehead program and skills of an outdoor educator. The winds and water of the Maine coast pulled Sam back to Whitehead in 2021, where he worked directly with Anne as the co-director of the program. That summer marked the transfer of decades of Whitehead knowledge and directorship from Anne to Sam.

				</p>
				<p>
				During the rest of the year, Sam works as an educator in Thetford, Vermont, where he spreads PIC values by imparting students with the importance of independence coupled with a concern for others, honesty, generosity, a sense of humor, and the ability to find all the joy life has to offer. His free time is spent recreating and traveling among the mountains, rivers, and lakes of the Northeast.
				</p>
			</div>

			<div className='centered-content'>
				<h3>Board of Directors</h3>
				<p>Nick Bellamy</p>
				<p>Charlie Boutwell</p>
				<p>Chris Brunet</p>
				<p>Sumner Ford</p>
				<p>Ben Hincks</p>
				<p>Woody Hoyt</p>
				<p>Max Huber</p>
				<p>Matt Kennard</p>
				<p>John Pollard</p>
				<p>Chris Schell</p>
				<p>Ben Swan</p>
				<p>Emily Swan</p>

				<h3>Directors Emeritus</h3>
				<p>Monroe Baldwin</p>
				<p>Rex Bates</p>
				<p>Ned Bishop</p>
				<p>Sumner Ford</p>
				<p>Jim Breeden</p>
				<p>Henry Clauson</p>
				<p>Pope Ward</p>
				<p>Tom Yoder</p>

			</div>


		</div>

	)
}

export default Staff;