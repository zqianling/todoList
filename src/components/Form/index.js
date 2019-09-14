
import React from 'react';
import {addTodo,asyncAdd} from '../../actions'
import {connect} from 'react-redux'
class Form extends React.Component{
  constructor(props){
    super(props);
    this.state={
      content:'',
      isnull:false
    }
    this.handleSave=()=>{
      if(this.refs.hello.value!==''){
        this.props.dispatch(addTodo(this.state.content));
        this.refs.hello.value='';
      }else{
        this.setState({isnull:true});
      }
    }
  }
  render(){
    return (
      <div className="form-total">
        <input type="text" value={this.state.connect} onChange={event=>this.setState({content:event.target.value,isnull:false})} ref="hello"/>
        <button onClick={this.handleSave}>保存</button>
        <p>{this.state.isnull?<span>*对不起该数据不能为空，填写后重新提交</span>:null}</p>
      </div>
    )
  }
}

Form=connect()(Form);
export default Form;