import { createStore, combineReducers } from 'redux'

import filterReducer from './reducers/filterReducer'
import regionReducer from './reducers/regionReducer'

const reducer = combineReducers({
    filter: filterReducer,
    region: regionReducer,
})

const store = createStore(reducer)

export default store;