import {configureStore} from '@reduxjs/toolkit'
import uiSlice from './reducers/uiSlice'

const store=configureStore({
    reducer: uiSlice
})

export default store