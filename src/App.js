import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import { Header, Nav, Body } from "./template"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "register"
    }
  }

  goToPage = page => {
    this.setState({
      currentPage: page
    })
  }

  render() {
    return (
      <Router>
        <Header />
        <Nav page={this.state.currentPage} changePage={this.goToPage} />
        <Body page={this.state.currentPage} />
      </Router>
    );
  }
}

export default App;
