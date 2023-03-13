import React from 'react';
import Hero from '../components/Hero';
import HeroImg from '../components/Assets/HeroImg/HeroImg.JPG'


function Home () {
    return (
        <div>
           <Hero backgroundImage= {HeroImg}>
            <h1>Hello!</h1>
            <h2>I am a London based Frontend Developer</h2>
            <p>I came to front end development from a  design background, retraining after working within the fashion industry and later UX. 
Now I enjoy applying my detail oriented design mindset and  knowledge of user psychology to design and develop well rounded  products which feel effortless to use and which customers will return to time and again.
In my free time, you can find me exploring my creative passions of printing and sewing, or broadening my horizons in galleries and museums. I love live music, theatre and comedy. I’m no stranger to a long hike through the countryside. I can find the joy in pretty much anything!</p>

            <div>
            
            <h3>Laurence Moreton Burt</h3>
            <h4>Frontend Developer and UX Designer</h4>
            <p> laurencembdesign@gmail.com </p>
            </div>

           </Hero>
        </div>
    )
}

export default Home;