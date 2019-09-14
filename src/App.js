
import React from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Form from './components/Form/index';
import './App.css';
class App extends React.Component{
 
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Form></Form>
          <Content></Content>
          <Footer></Footer>
        </header>
      </div>
    );
  }
}
export default App;