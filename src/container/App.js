import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from '../components/HomeComponent'
import Header from "../components/Header"
export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    )
  }
}
