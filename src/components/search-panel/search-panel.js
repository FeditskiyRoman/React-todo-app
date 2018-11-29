import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    term: ''
  };

  onSearchChamge = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChamge(term);
  };

  render() {
    return (
      <input type="text"
        className="form-control search-input"
        onChange={this.onSearchChamge}
        value={this.state.name}
        placeholder="type to search" />
    );
  };
};
