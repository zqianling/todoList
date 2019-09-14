let nextTodoId = 0;
export const addTodo=text=>({
  type: 'ADD',
  id:nextTodoId++,
  text,
  component:false
});
export const deleteData=(id)=>({
  type: 'DEC',
  id:id
});
export const setFilter=(filter) => ({
      type: 'SET_VISIBILITY_FILTER',
      filter:filter
})
export const asyncAdd=(data)=>{
  return dispatch=>{
    setTimeout(()=>{
      dispatch(addTodo(data));
    },1000);
  }
}