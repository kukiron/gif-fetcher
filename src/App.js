import React from 'react';
import SearchBar from './components/searchBar';
import GifDisplay from './components/gifDisplay';

class App extends React.Component {
  state = {
    loading: true,
    term: '',
    gif: {}
  }

  handleSearch = term => {
    this.setState({ loading: true });
    this.props.getGif(term).then((gif) => {
      this.setState({ loading: false, gif, term });
    })
  }

  render () {
    return (
      <div>
        <h1>GIF Fetcher!</h1>
        <p>Find a GIF on <a href='http://giphy.com'>giphy</a>.<br /> Keep hitting Enter or click the Search button for more results.</p>
        <div>
          <SearchBar onSearch={this.handleSearch} />
        </div>
        <GifDisplay
          loading={this.state.loading}
          url={this.state.gif.url}
          width={this.state.gif.width}
          sourceUrl={this.state.gif.sourceUrl}
          />
      </div>
    );
  }
}

export default App;
