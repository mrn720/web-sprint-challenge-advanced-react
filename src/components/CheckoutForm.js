import React, { useState } from "react"
import useForm from "../hooks/useForm"

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [firstName, setFirstName, firstNameHandler] = useForm("")
  const [lastName, setLastName, lastNameHandler] = useForm("")
  const [address, setAddress, addressHandler] = useForm("")
  const [city, setCity, cityHandler] = useForm("")
  const [state, setState, stateHandler] = useForm("")
  const [zip, setZip, zipHandler] = useForm("")
  

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccessMessage(true)
    console.log(firstName)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={firstName}
            onChange={e => firstNameHandler(e.target.event)}
            type = "text"
            placeholder = "First Name"
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={lastName}
            onChange={e => lastNameHandler(e.target.event)}
            type = "text"
            placeholder = "Last Name"
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={address}
            onChange={e => addressHandler(e.target.event)}
            type = "text"
            placeholder = "Address"
          />
        </label>
        <label>
          City:
            <input name="city" 
            value={city} 
            onChange={e => cityHandler(e.target.event)}
            type = "text"
            placeholder = "City"
            />
        </label>
        <label>
          State:
            <input name="state" 
            value={state} 
            onChange={e => stateHandler(e.target.event)}
            type = "text"
            placeholder = "State"
            />
        </label>
        <label>
          Zip:
            <input name="zip" 
            value={zip} 
            onChange={e => zipHandler(e.target.event)} 
            type = "text"
            placeholder = "Zip Code"
            />
        </label>
        <button>Checkout</button>
      </form>
      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {firstName} {lastName}
          </p>
          <p>{address}</p>
          <p>
            {city}, {state} {zip}
          </p>
        </div>
      )}
    </>
  )
}

export default CheckoutForm