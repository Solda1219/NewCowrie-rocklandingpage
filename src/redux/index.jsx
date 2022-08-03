import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers/rootReducer';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';


const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
  key: 'ico',
  storage,
  blacklist: [
    "config",
    "Icons" ]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);


const configureStore = () => {
  // Create Store
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
  // Persist Store
  const persistor = persistStore(store);

  const storePersist = {
    store,
    persistor,
  };
  return storePersist;
};
export default configureStore();


