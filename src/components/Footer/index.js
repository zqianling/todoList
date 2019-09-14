
import React from 'react';
import {setFilter} from '../../actions'
import {connect} from 'react-redux'
class Footer extends React.Component{
  constructor(props){
    super(props);
    this.handleActive=(filter)=>{
      this.props.setFilter(filter);
    }
    this.finish=(filter)=>{
      this.props.setFilter(filter);
    }
  }
  render(){
    return (
      <div>
        <button onClick={this.props.setFilter.bind(this,"SHOW_ALL")}>全部</button>
        <button onClick={this.finish.bind(this,"SHOW_COMPLETED")}>已完成</button>
        <button onClick={this.handleActive.bind(this,"SHOW_ACTIVE")}>未完成</button>
      </div>
    )
  }
}
const actionCreators={setFilter}
Footer=connect(null,actionCreators)(Footer);
export default Footer