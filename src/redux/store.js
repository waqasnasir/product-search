import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./reducers"

const enhancers = []
// eslint-disable-next-line no-underscore-dangle
const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
if (typeof devToolsExtension === "function") {
  enhancers.push(devToolsExtension())
}
const composedEnhancers = compose(applyMiddleware(thunk), ...enhancers)
export default function configureStore() {
  return createStore(rootReducer, composedEnhancers)
}
