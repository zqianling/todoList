/*
 * @Descripttion: 
 * @version: 0.11
 * @Author: 前领
 * @Date: 2019-09-12 10:58:32
 * @copyright: Copyright (c) 2019,Hand
 */
import todoReducer from './todoReducer'
import visibleaddTo from './visibleaddTo'
import {combineReducers} from 'redux'
export default combineReducers({
  todoReducer,
  visibleaddTo
})