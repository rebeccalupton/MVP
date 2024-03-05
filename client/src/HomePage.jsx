import React from 'react'
import './App.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'



export default function HomePage() {
    const [someState, setSomeState] = useState(0)
   
    function clickVolunteerInfo() {
      alert("hello!")
    };
    
    return (
     <>
    
      <h1>The Giving Project</h1> 
      <h2>About our mission</h2>
      <p>Calling all compassionate hearts! The Giving Project invites you to be a part of a transformative initiative that combines altruism and direct impact. As a volunteer-driven charity, we rely on individuals like you to donate both time and food items to make a meaningful difference in the lives of those experiencing homelessness. Join our community of dedicated volunteers who understand the power of collective efforts in creating positive change. Signing up for different shifts is easy and flexible, allowing you to contribute in a way that fits your schedule. By participating in The Giving Project, you'll have the opportunity to prepare nourishing meals, pack care packages, and personally distribute sustenance to those in need. We believe that every act of kindness, no matter how small, creates a ripple effect of positive change. Join us in the mission to alleviate hunger and restore hope. It's not just about providing food; it's about building connections, fostering empathy, and making a real impact in the lives of others. Be the change – volunteer with The Giving Project and let's make a difference together!.</p>
      <h2>How does it work?</h2>
      <p>
        We gather every Saturday and Sunday at our local headquarters in the heart of Barcelona, offering two shifts for your convenience: 1-3pm or 7-9pm. For each shift, we need 4-5 dedicated volunteers. When you sign up, you commit to bringing 30 portions of a specific food item needed for the day. Our regular menu includes cheese sandwiches, tuna sandwiches, boiled eggs, soft fruit and a sweet treat like muffins or cereal bars. The organization takes care of bulk purchasing juice/water to supply. You are welcome to bring alternative food items either in addition or instead of those listed, as well as non food items such as clothing or personal hygiene products; please reach out to the organization beforehand to ensure coordination
      </p>

      <p>
        Each volunteer will be equipped with a trolley filled with these essential items as we follow a designated route on foot through central Barcelona. This route is carefully planned based on known locations where homeless individuals settle, although it may be subject to change due to weather, season, time, or other conditions. Fear not if it's your first time – a main leader familiar with the route will guide the volunteers. . Your commitment, no matter your experience level, is crucial in making a positive impact on our community. To make the experience even more impactful, why not join with a friend or two and split the responsibility of buying/making the food.
      </p>
      <div className="img-homepage">
      <img src="/images/Image-1.png" alt="Image-1" />
      <img src="/images/Image-5.png" alt="Image-5" />
      <img src="/images/Image-8.png" alt="Image-8" />
      <img src="/images/Image-9.png" alt="Image-9" />
      <img src="/images/Image-12.png" alt="Image-12" />
      <img src="/images/Image-13.png" alt="Image-13" />
      </div>
      {/* <img src = "https://media.istockphoto.com/id/1317220163/fr/photo/adolescent-aidant-%C3%A0-pr%C3%A9parer-le-petit-d%C3%A9jeuner-un-matin-ensoleill%C3%A9.jpg?s=612x612&w=0&k=20&c=qdGR-1NVe5T3PhQmzcMkfwDR1vgUuc6jTVxghHH-G7A=" /> */}
      <Link to="/VolunteerView"><button>Join us and sign up</button></Link>
      <button onClick={clickVolunteerInfo}>Volunteer info page for host</button>
      <footer className="footer">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            Address: Carrer Palau 6, Barcelona, 08002<br />
            Phone: +447479231451<br />
            Email: <a href="mailto:thegivingproject@gmail.com">thegivingproject@gmail.com</a>
          </p>
        </div>
      </footer>
      </>
  );
}