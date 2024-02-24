import React, { Component } from 'react';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      searchText: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });

    this.filterPersons(event.target.value);
  }

  componentDidMount() {
    fetch('https://634fc8a3df22c2af7b59dc7a.mockapi.io/items')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ persons: data });
      })
      .catch(() => {
        this.setState({ persons: [] });
      });
  }

  filterPersons(name) {
    fetch(`https://634fc8a3df22c2af7b59dc7a.mockapi.io/items?name=${name}`)
      .then((response) => (response.status === 200 ? response.json() : []))
      .then((data) => {
        this.setState({ persons: data });
      })
      .catch(() => {
        this.setState({ persons: [] });
      });
  }

  render() {
    return (
      <div className="interface">
        <header>
          <input
            type="text"
            placeholder="Результаты поиска"
            value={this.state.searchText}
            onChange={this.handleChange}></input>
        </header>
        <content>
          <table>
            <thead>
              <th>id</th>
              <th>Имя</th>
              <th>Возраст</th>
              <th>Город</th>
              <th>Вес</th>
            </thead>
            <tbody>
              {this.state.persons.map((person, id) => (
                <tr key={id}>
                  <td> {person.id}</td>
                  <td>{person.name}</td>
                  <td>{person.age}</td>
                  <td>{person.city}</td>
                  <td>{person.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </content>
      </div>
    );
  }
}

export default Search;
