import { createStore } from 'redux'
import Reducer from '../Reducer/index'

const store = createStore(Reducer)

store.subscribe(() => {
    console.oog(store)
})

export default store 