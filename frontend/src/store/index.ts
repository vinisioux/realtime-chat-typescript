// import { createStore, applyMiddleware, Store } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import { AuthState } from './ducks/auth/types';

// import rootReducer from './ducks/rootReducer';
// import rootSaga from './ducks/rootSaga';

// export interface ApplicationState {
//   auth: AuthState;
// }

// const sagaMiddleware = createSagaMiddleware();

// const store: Store<ApplicationState> = createStore(
//   rootReducer,
//   applyMiddleware(sagaMiddleware)
// );

// sagaMiddleware.run(rootSaga);

// export default store;

import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

// export default function configureStore() {
//   const sagaMiddleware = createSagaMiddleware();

//   const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

//   sagaMiddleware.run(rootSaga);

//   return store;
// }

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export { store };
