import React from 'react';
const Interface = (props) => {
  return (
    <div className="interface">
      <header>
        <input
          type="text"
          placeholder="Результаты поиска"
          value={props.searchText}
          onChange={this.handleChange}
        />
      </header>
      <content>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Имя</th>
              <th>Возраст</th>
              <th>Город</th>
              <th>Вес</th>
            </tr>
          </thead>

          {/* <ul>
      {filteredPersons.map((person, id) => (
        <li key={id}>
          {person.id}
          {person.name}
          {person.age}
          {person.city}
          {person.weight}
        </li>

      ))}
    </ul> */}
          <tbody>
            {props.filteredPersons.map((person, id) => (
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
};
export default Interface;
