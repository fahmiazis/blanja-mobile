import {combineReducers} from 'redux'

import auth from './auth'
import product from './product'
import profile from './profile'

export default combineReducers({
  auth,
  product,
  profile
})