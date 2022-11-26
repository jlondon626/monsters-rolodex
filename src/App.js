import { Component , useState } from 'react';

import CardList from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  return(
    <div className="App">
      <h1 className ="app-title">Monsters Rolodex</h1>

      {/* <SearchBox
        className = 'search-box' 
        placeholder='search monsters' 
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} /> */}
    </div> 
  )
}

// class App extends Component {

//   constructor() {
//     super();
//     console.log('constructor');

//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }  

//   componentDidMount() {
//     console.log('componentDidMount')
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((users) => 
//         this.setState(() => {
//           return {monsters: users}
//           },
//           () => {
//             console.log(this.state)
//           }
//         )
//       )      
//   }

//   onSearchChange = (event) => {
//     console.log(event.target.value);
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     })
//   }

//   render() {
//     // console.log('render from App');

//     const { monsters, searchField } = this.state
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     });

//     return (
//       <div className="App">
//         <h1 className ="app-title">Monsters Rolodex</h1>

//         <SearchBox
//           className = 'search-box' 
//           placeholder='search monsters' 
//           onChangeHandler={onSearchChange}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
