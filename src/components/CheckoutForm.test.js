import React from "react"
import { render, screen } from "@testing-library/react"
import CheckoutForm from "./CheckoutForm"
import userEvent from "@testing-library/user-event"
import App from "../App"

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<App />)

  const title = screen.getByText(/react plants/i)
  expect(title).toBeInTheDocument()
  
})

test("shows success message on submit with form details", () => {
  //focus submit
  render(<CheckoutForm />)

  const firstNameInput = screen.getByLabelText(/first name:/i)
  userEvent.type(firstNameInput, "Matt")

  const lastName = screen.getByLabelText(/last name:/i)
  userEvent.type(lastName, "Norris")

  const address = screen.getByLabelText(/address:/i)
  userEvent.type(address, "4131 Skyline Ridge Rd")

  const city = screen.getByLabelText(/city:/i)
  userEvent.type(city, "Gardendale")

  const state = screen.getByLabelText(/state:/i)
  userEvent.type(state, "AL")

  const zip = screen.getByLabelText(/zip:/i)
  userEvent.type(zip, "35071")

  const button = screen.getByRole("button")
  userEvent.click(button)

  expect(screen.getByTestId("successMessage")).toBeInTheDocument()
})