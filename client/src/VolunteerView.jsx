import React from 'react'
import './App.css'

export default function VolunteerView(props) {
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    signUpDate: "",
    shiftTime: "",
    itemsDonate: "",
  })};

  const handleInputChange = (event) => {
    console.log(event)
    const value = event.target.value;
    const name = event.target.name;
    setSignUpData((prevSignUpData) => ({
        ...prevSignUpData,
        [name]: value,
      }));
    };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted!", signUpData);
    //ADD Functionality laterrrr


    return (
    <div>
    <h2>Thanks for choosing to sign up! Please enter your details below:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First name
          <input
            name="firstName"
            value={signUpData.firstName}
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <label>
          Last name
          <input
            name="lastName"
            value={signUpData.lastName}
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <label>
          Phone number
          <input
            name="phoneNumber"
            value={signUpData.shiftTime}
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <label>
          Sign up date
          <input
            name="signUpDate"
            value={signUpData.signUpDate}
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <label>
          Shift time
          <input
            name="shiftTime"
            value={signUpData.shiftTime}
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <label>
          Items to donate
          <input
            name="itemsDonate"
            value={signUpData.itemsDonate}
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  };

  

// - Render a form for volunteers to sign up.
// - Collect first name, last name, phone number, sign up date, sign up shift time, and items to bring.
// - Handle form submission.
// - Display SignUpConfirmation upon form submission.