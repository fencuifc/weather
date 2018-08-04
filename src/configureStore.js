import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import { composeWithDevTools } from "redux-devtools-extension";

function configureStoreDev(initialState) {
  const composeEnhancers = composeWithDevTools({});

  const middlewares = [
    // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
    reduxImmutableStateInvariant(),
    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk
  ];


  const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(...middlewares),
  // other store enhancers if any
  ));
  return store;
}

const configureStore = configureStoreDev;

export default configureStore;
