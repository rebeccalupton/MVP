import React from 'react'
import { useState } from 'react'
import './App.css'
import backgroundImage from '../public/images/Background.png';
import { useEffect } from 'react';

export default function StaffView() {

  const [volunteerList, setVolunteerList] = useState([])
  useEffect(() => { ShowVolunteers()
    }, []);

  async function ShowVolunteers() {
  try {
    let response = await fetch("/api");
    if (response.ok) {
      let data = await response.json();
      setVolunteerList(data);
    } else {
      console.log(`Server error: ${response.status} ${response.statusText}`);
    }
  } catch (err) {
    console.log(`Network error: ${err.message}`);
  }
}

  return (
    <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>
    

<table>
  <caption>
    List of Volunteers
  </caption>
  <thead>
    <tr>
      <th scope="col">First name</th>
      <th scope="col">Last name</th>
      <th scope="col">Phone number</th>
      <th scope="col">Sign up date</th>
      <th scope="col">Shift time</th>
      <th scope="col">Items to donate</th>
    </tr>
  </thead>
  <tbody>
  {
      volunteerList.map(vol => (
      <tr>
      <td>{vol.first_name}</td>
      <td>{vol.last_name}</td>
      <td>{vol.phone_number}</td>
      <td>{vol.sign_up_date.slice(0, 10)}</td>
      <td>{vol.shift_time.slice(0,5)}</td>
      <td>{vol.items_to_donate}</td>
    </tr>
      )) 
    }
  
  </tbody>
</table>
    </div>
  )
}

// - Render a search/filter form for staff.
// - Display a list of volunteers based on search/filter criteria.