import { useState } from 'react'
// import all pages here:

import './App.css'
import HomePage from './HomePage.jsx'
import VolunteerView from "./VolunteerView"
import StaffView from "./StaffView"
import SignUpConfirmation from "./SignUpConfirmation"



import { Routes, Route, useNavigate } from "react-router-dom";

// - Display the entrance page and organization information.
// - Render images and basic info.
// - Include buttons to navigate to VolunteerView and StaffView.
// - Display contact information.
// Maybe create a new file later for the entrance page and leave the APP file as the root

function App() {
//   const [someState, setSomeState] = useState(0)
 
//   function clickVolunteerInfo() {
//     alert("hello!")
 
  

return (  

 <>

   <Routes>
/* all routes will go inside routes tags here */
    <Route 
        path="/" 
        // you create the yourPath name whatever you like
        element={<HomePage/>} 
        // your component will be the file/page name that you want to show
      />
    <Route 
        path="/VolunteerView" 
        element={<VolunteerView/>} 
      />
    <Route 
        path="/StaffView" 
        element={<StaffView/>} 
      />
    <Route 
        path="/SignUpConfirmation" 
        element={<SignUpConfirmation/>} 
      />

    {/* <Route
        path="*"
        element={<Error404 />} // star means if I go anywhere that is not a defined path, to present the error 404 */}
      {/* /> */} 

       {/* useNavigate function, save function in a variable which can easily navigate someone to a new page upon submitting a form etc. Import all routes to define the path and throughout the app you can use the paths in the return to render.  */}

    
     </Routes>
     
         </>

)};

 

export default App;
