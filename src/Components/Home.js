import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import banner from "../img/pic6.jpeg";
import pic4 from "../img/pic4.jpeg";
import pic5 from "../img/pic5.png";
import picGif from "../img/pic-gif-new.gif";
import pic1904 from '../img/pic-1904.jpeg';
import kitahdin from '../img/kitahdin.jpeg';
import hike4 from '../img/trips/hike4.jpeg';
import hike6 from '../img/trips/hike6.jpeg';
import campfire from '../img/campfire.jpeg';
import campfire1 from '../img/campfire1.jpeg';
import expedition from '../img/expedition2.jpeg';
import awards from '../img/activities/awards.jpeg';



const Home = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let url =
      `https://pineisland.org/blog/wp-json/wp/v2/posts?_embed&per_page=3`;

    const makeApiCall = async () => {
      const res = await fetch(url);
      
      console.log('res - ', res)

      const json = await res.json();

      console.log("json - ", json);
      
      setPosts(json);
    };

    makeApiCall();

  }, []);

  console.log('posts', posts);

  let widget = posts.map((post, i) => {
    

    return (
      <div >
        <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} className='widget-title' />
        <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} className='widget-text' />
        <a target="#" href={post.link} className='widget-link'><button style={{width: '190px'}}>Read More</button></a>
      </div>
    );
  })

  return (
    <div>
      <div className="main" style={{ backgroundImage: `url(${picGif})` }}>
        <h1 className="title">Pine Island Camp</h1>
        <h2 className="subtitle">Established 1902</h2>
      </div>
      <div className="slide">
        <div className="copy">
          <h2>Summers that shape a lifetime</h2>
          <p>
            Pine Island’s simple outdoor 
            lifestyle allows boys to flourish and find a sense of independence, 
            albeit under the close supervision of our caring staff.
            Whether your son is shy or gregarious, big or small, this camp will challenge 
            him to be at his best and instill the quiet confidence that comes from 
            personal achievement. 
          </p> 
          <p>
            Generations of Pine Islanders have found their summers at camp to be among the most meaningful of their lives.
          </p>
        </div>

        <img src={pic4} />
      </div>

      <div className="slide">
        <img src={pic5} />

        <div className="copy">
          <h2>Simple, unplugged, and close to nature</h2>
          <p>
            Distinguished by its program, small enrollment, and unique
            freshwater island location, Pine Island Camp has offered fun,
            traditional camp activities since 1902 in a rustic setting that
            develops a boy's independence, imagination and character.
          </p>
        </div>
      </div>

      <div className='slide column'>
        <h2 >The Latest News & Events</h2>
        <div className='homepage-widget'>
          {widget}
          </div>
      </div>

      <div className="slide">

        <div className="copy">
          <h2>Community, Self-confidence, Character</h2>

          <p>Independence coupled with a concern for others, cooperation, an intelligent sense of 
            humor, honesty, and respect for the natural world and how to experience 
            it safely are all things we strive to teach boys each summer.
          </p>
        </div>

        <img src={hike4} />
      </div>


      <div className="gif" style={{ backgroundImage: `url(${banner})` }} >
        <h2>A magical island in the middle of a pristine, quiet lake in Maine</h2>
        <Link to='#'><button>CAMP LIFE</button></Link>
      </div>

      <div className="slide">

        <div className="copy">
          <h2>Full Season Experience</h2>
          <p>
            Pine Island Camp was founded in 1902 by Clarence Colby on Pine Island, 
            a beautiful small island in Great Pond, the largest of the Belgrade Lakes 
            in central Maine. Colby's original ideas and ideals are very much present at
             Pine Island today, and the philosophy he established is as important and 
            relevant to young people today as it was over 100 years ago.</p> 
        </div>

        <img src={pic1904} />
      </div>

      <div className="slide">
        <img src={campfire1} style={{height: '340px'}} />

        <div className="copy">
          <h2>Nightly Campfire and Saturday Night Show</h2>
          <p>
            Every night we have campfire, during which skits, songs, stories, and games keep everyone amused. At this time, the Black and White Knights and their hideous assistants may appear to duel in canoes as they have for decades. A hirsute Esther Williams and her water nymphs might perform some synchronized swimming. Or perhaps Johnny Credit Card will perform one of his memorable ballads. Participation in Campfire is open to everyone and provides an opportunity for creativity and self-expression that is increasingly rare in today's digital world.
            </p> 
        </div>
      </div>

      <div className="gif" style={{ backgroundImage: `url(${kitahdin})` }} >
        <h2>Incredible adventures across the Maine wilderness</h2>
        <Link to='#'><button style={{width: '190px'}}>VIEW TRIPS</button></Link>
      </div>

      {/*<div className="slide">
        <div className="copy">
          <h2>Trips Across the Maine Wilderness</h2>
          
          <p>Each summer, Pine Island sends out dozens of hiking, canoeing, 
          kayaking, and rowing trips across Maine
          </p>

          <Link to='#'><button style={{width: '190px'}}>LEARN ABOUT OUR TRIPS</button></Link>
        </div>

        <img src={hike6} />
      </div>*/}

      {/*<div className="slide">
        <img src={awards} />
        <div className="copy">
          <h2>Parent Reviews</h2>
          
          <p>Each summer, Pine Island sends out dozens of hiking, canoeing, 
          kayaking, and rowing trips across Maine
          </p>

          <Link to='#'><button style={{width: '190px'}}>LEARN ABOUT OUR TRIPS</button></Link>
        </div>
      </div>*/}

      {/*<div className="gif" style={{ backgroundImage: `url(${expedition})` }} >
        <h2>Leadership Development - Expedition Camp</h2>
        <Link to='#'><button style={{width: '190px'}}>EXPEDITION CAMP</button></Link>
      </div>*/}


    </div>
  );
};

export default Home;
