import { createStore, combineReducers } from 'redux'

import filterReducer from './reducers/filterReducer'
import regionReducer from './reducers/regionReducer'
import themeReducer from './reducers/themeReducer'

const reducer = combineReducers({
    filter: filterReducer,
    region: regionReducer,
    theme: themeReducer,
})

const store = createStore(reducer)

export default store;