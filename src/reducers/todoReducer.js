/*
 * @Descripttion: 
 * @version: 0.11
 * @Author: 前领
 * @Date: 2019-09-11 15:54:41
 * @copyright: Copyright (c) 2019,Hand
 */
let list=[]
const todoReducer= (state = list, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          component: false
        }
      ]
    case 'DEC':
      return state.filter(item=>item.id!==action.id);
    default:
      return state
  }
}
export default todoReducer