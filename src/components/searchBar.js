import React from 'react';

class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  }

  handleChange = (e) => {
    const term = e.target.value;
    this.setState({ searchTerm: term });

    if (term.length > 2) {
      this.props.onSearch(term);
    }
  }

  handleKeyUp = (e) => {
    // const ENTER_KEY_CODE = 13;
    if(e.keyCode === 13) this.props.onSearch(this.state.searchTerm);
  }

  render () {
    return (
      <input
        type="text"
        className="search-bar"
        onChange={this.handleChange}
        onKeyUp={this.handleKeyUp}
        placeholder="Type a tag name here"
        value={this.state.searchTerm}
        />
    );
  }
}

export default SearchBar;
