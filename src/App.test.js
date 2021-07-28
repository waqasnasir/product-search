import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders header with search products title", () => {
  render(<App />)
  const linkElement = screen.getByText(/Search Products/i)
  expect(linkElement).toBeInTheDocument()
})
