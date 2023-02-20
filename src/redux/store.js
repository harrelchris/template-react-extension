import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './reducers/CounterReducer'

export default configureStore({
  reducer: {
    counter: CounterReducer,
  }
})
