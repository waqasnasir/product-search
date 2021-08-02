import React from "react"
import { render, screen } from "./utils/testUtils"
import App from "../App"

describe("App", () => {
  test("renders app with Header", () => {
    render(<App />)
    const linkElement = screen.getByText(/Search Products/i)
    expect(linkElement).toBeInTheDocument()
  })
})
