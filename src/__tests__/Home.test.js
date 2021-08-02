import React from "react"
import * as reactRedux from "react-redux"

import { useSelector } from "react-redux"
import { render, screen, fireEvent, act } from "./utils/testUtils"
import initialAppState from "./utils/initialstate"
import Home from "../pages/Home/Home"

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}))

describe("Home", () => {
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch")
  beforeEach(() => {
    useSelector.mockImplementation((callback) => callback(initialAppState))
  })
  afterEach(() => {
    useSelector.mockClear()
    useDispatchMock.mockClear()
  })

  test("Render Home component with search bar, gender selection drop down and discounted check box", async () => {
    render(<Home />)

    // should have search bar
    const searchBar = screen.getByPlaceholderText("Search Products")
    expect(searchBar).toBeInTheDocument()
    expect(searchBar.id).toBe("product_search")
    expect(searchBar).toHaveValue("")

    // should have gender selection dropdown
    const genderDropDown = screen.getByRole("combobox")
    expect(genderDropDown.id).toBe("gender_dropdown")
    expect(genderDropDown).toHaveValue("")

    // should have discounted item
    const discountedCheckBox = screen.getByRole("checkbox")
    expect(discountedCheckBox).toBeInTheDocument()
    expect(discountedCheckBox.id).toBe("discounted_items")
  })

  test("Render home with no data when state is empty ", async () => {
    const localState = {}
    useSelector.mockImplementation((callback) => callback(localState))
    render(<Home />)
    expect(screen.getByText("No Data")).toBeInTheDocument()
  })

  test("Render home with all the products in state ", async () => {
    render(<Home />)
    const productTiles = document.getElementsByClassName("ant-card")
    // here as page limint is 100 products/page so we can easily compare rendered products with initial state's length
    // as there are only 7 items in our initial state if they were more than 100 we would not be comparing with length but
    // with 100 instead.
    expect(productTiles.length).toBe(initialAppState.filteredProducts.length)
  })

  test("Typing in searchBar should dispatch an action", async () => {
    const dummyDispatch = jest.fn()
    useDispatchMock.mockReturnValue(dummyDispatch)
    render(<Home />)
    // should have search bar
    const searchBar = screen.getByPlaceholderText("Search Products")
    expect(searchBar).toBeInTheDocument()
    expect(searchBar.id).toBe("product_search")
    fireEvent.change(searchBar, {
      target: { value: "Weekday THURSDAY Jeans Slim Fit blac" },
    })
    expect(searchBar.value).toBe("Weekday THURSDAY Jeans Slim Fit blac")
    expect(dummyDispatch).toHaveBeenCalledTimes(1)
  })

  test("Selecting drop down should have updated values", async () => {
    const promise = Promise.resolve()
    const dummyDispatch = jest.fn()
    useDispatchMock.mockReturnValue(dummyDispatch)
    render(<Home />)
    // should have search bar
    // should have gender selection dropdown
    const genderDropDown = screen.getByRole("combobox")
    expect(genderDropDown.id).toBe("gender_dropdown")
    fireEvent.change(genderDropDown, { target: { value: "female" } })
    await act(() => promise)
    expect(screen.getByText("female")).toBeInTheDocument()
  })
  test("Discounted items should be checkable", async () => {
    const promise = Promise.resolve()
    const dummyDispatch = jest.fn()
    useDispatchMock.mockReturnValue(dummyDispatch)
    render(<Home />)
    // should have search bar
    // should have gender selection dropdown
    const discountedCheckBox = screen.getByRole("checkbox")
    expect(discountedCheckBox).toBeInTheDocument()
    expect(discountedCheckBox.id).toBe("discounted_items")
    fireEvent.change(discountedCheckBox, { target: { checked: true } })
    await act(() => promise)
    expect(discountedCheckBox.checked).toBe(true)
  })
})
