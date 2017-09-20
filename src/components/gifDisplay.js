import React from 'react';

const GIPHY_LOADING_URL = `https://giphy.com/gifs/loop-loading-loader-xTk9ZvMnbIiIew7IpW`;

class GifDisplay extends React.Component {
  giphySourceUrl= () => {
    return this.props.sourceUrl || GIPHY_LOADING_URL;
  }

  render () {
    const url = this.props.loading ? 'loading.gif' : this.props.url;
    // const width = this.props.width || 200;

    return (
      <div className="gif-display-div">
        <a href={this.giphySourceUrl()} title='view this on giphy' target='new'>
          <img id='gif' src={url} alt="gif-fetcher" />
        </a>
      </div>
    );
  }
}

export default GifDisplay;
