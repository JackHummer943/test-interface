import '../src/App.css';
import React, { Component } from 'react';
import Search from './featuers/Search';
class App extends Component {
  handleChange(event) {
    this.setState({ searchText: event.target.value });
  }

  render() {
    return <Search />;
  }
}
export default App;
