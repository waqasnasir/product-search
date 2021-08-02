/* eslint-disable react/prop-types */
import React from "react"
import { render as rtlRender } from "@testing-library/react"
import { Provider } from "react-redux"
import configureStore from "../../redux/store"
import rootReducers from "../../redux/reducers"

delete window.matchMedia
window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // deprecated
  removeListener: jest.fn(), // deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
})

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: rootReducers, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from "@testing-library/react"
// override render method
export { render }
