import React, { Component } from 'react';
import '../src/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { persons: [], searchText: ' ' };

    this.handleChange = this.handleChange.bind(this);
    this.filterPersons = this.filterPersons.bind(this);
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });
  }

  componentDidMount() {
    fetch('https://634fc8a3df22c2af7b59dc7a.mockapi.io/items')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ persons: data });
      });
  }

  filterPersons() {
    const { searchText, persons } = this.state;
    const regex = new RegExp(searchText, 'gi');

    return persons.filter((person) => person.name.match(regex));
  }

  render() {
    const { persons, searchText } = this.state;
    const filteredPersons = searchText ? this.filterPersons() : persons;

    return (
      <div className="interface">
        <header>
          <input
            type="text"
            placeholder="Результаты поиска"
            value={searchText}
            onChange={this.handleChange}
          />
        </header>
        <content>
          <ul>
            {filteredPersons.map((person, id) => (
              <li key={id}>
                {person.id}
                {person.name}
                {person.age}
                {person.city}
                {person.weight}
              </li>
            ))}
          </ul>
        </content>
      </div>
    );
  }
}
export default App;
