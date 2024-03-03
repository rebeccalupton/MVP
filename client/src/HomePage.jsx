import React from 'react'
import './App.css'


export default function HomePage() {
    const [someState, setSomeState] = useState(0)
   
    function clickVolunteerInfo() {
      alert("hello!")
    };
    
    return (
     <>
    
      <h1>Name of organization</h1> 
      <h2>About our missions</h2>
      <img src = "https://images.pexels.com/photos/8078379/pexels-photo-8078379.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <p>Homeless charities play a crucial role in addressing the pressing issue of homelessness by providing support and resources to those in need. These organizations are dedicated to offering shelter, food, and essential services to individuals experiencing homelessness, aiming to restore their dignity and help them regain control of their lives. Homeless charities often operate shelters where individuals can find a safe place to sleep, access hygiene facilities, and receive meals. Additionally, these charities may offer outreach programs to connect with those living on the streets, providing them with necessities such as clothing, blankets, and medical assistance. Beyond immediate relief, many homeless charities also focus on long-term solutions, including job training, counseling, and housing assistance, to help individuals break the cycle of homelessness. Through their tireless efforts, homeless charities contribute significantly to building a more compassionate and supportive community for those facing housing insecurity.</p>
      <button>Join us and sign up</button>
      <button onClick={clickVolunteerInfo}>Volunteer info page for host</button>
      <footer>
        <p>
          Contact info for organization
        </p>
      </footer>

    </>
    )};