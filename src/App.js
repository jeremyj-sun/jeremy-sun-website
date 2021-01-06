import './App.css';
import './loader.css';

import Home from './home.js'
import Projects from './projects.js'
import Loader from './loader.js'

import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       loading: true
    }
  }
  
  componentDidMount() {
      delayAsyncCall().then(()=>{
        this.setState({loading: false})
        document.body.style.backgroundColor = '#FFFFFF';
      })
    //console.log('Mounted')
  }
  
  render() {
    const { loading } = this.state;

    if (loading) {
      return (<Loader caption='Loading...'></Loader>);
    }

    return (
      <Switch>
        <div className="App">
          <Route path="/" component={Home} exact/>
          <Route path="/projects" component={Projects} />
        </div>
    </Switch>
    );
  }
}

/* To test the loading screen */
function delayAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 0));
}

export default App
