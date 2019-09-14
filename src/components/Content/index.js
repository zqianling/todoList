
import React from 'react';
import {deleteData} from '../../actions'
import {connect} from 'react-redux'
class Content extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:''
    }
    this.handleDelete=(id)=>{
      this.props.deleteData(id);
    }
  }
  render(){
    return (
      <div>
        <ul>
          {this.props.todoReducer.map(item=><li key={item.id}>{item.text}<button onClick={this.handleDelete.bind(this,item.id)}>删除</button></li>)}
        </ul>
      </div>
    )
  }
}
//根据todoReducer和visibilityFilter的值来计算状态，映射给当前container的props
const getVisibleTodos = (todoReducer, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todoReducer.filter(t => t.component===false)
    case 'SHOW_ACTIVE':
      return todoReducer.filter(t => t.component===true)
    case 'SHOW_ALL':
    default:
      return todoReducer
  }
}
//获取store中数据，并且将数据根据不同需求进行过滤后赋值给todos，这样todos就是处理后数据
const mapStateToProps=(state)=>{
  return {todoReducer:getVisibleTodos(state.todoReducer,state.visibleaddTo)}
}
//把所有行为引过来,这样就不是使用dispatch，直接action就行
const actionCreators={deleteData}
Content=connect(mapStateToProps,actionCreators)(Content);
export default Content