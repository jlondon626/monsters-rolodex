import { Component } from 'react';

class SearchBox extends Component {
    render() {
        return (
            <input 
            className = 'SearchBox' 
            type = 'search' 
            placeholder = 'search monsters' 
            onChange={onSearchChange}
          />
        )
    }
}

export default SearchBox;