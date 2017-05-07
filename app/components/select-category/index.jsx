import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

import './style.scss';
import PropTypes from './proptypes';
import constants from '../../constants';

export default class SelectCategory extends Component {

  static propTypes = PropTypes;

  constructor(props) {
    super(props);
    this.onUpdateInput = this.onUpdateInput.bind(this);
    this.onNewRequest = this.onNewRequest.bind(this);
    this.state = {
      searchText: 'hi',
      values: [],
    };
  }

  onNewRequest(value) {
    const values = this.state.values.concat(value);
    this.setState({
      values,
      searchText: '',
    });
    this.props.updateAddEpense(values, 'category', 'Array');
  }

  onUpdateInput(searchText) {
    this.setState({ searchText });
  }

  render() {
    return (
      <div className="component-category">
        <AutoComplete
          maxSearchResults={5}
          floatingLabelText="Select Category"
          onChange={this.onChange}
          searchText={this.state.searchText}
          onNewRequest={this.onNewRequest}
          onUpdateInput={this.onUpdateInput}
          dataSource={constants.defaultCategory}
          filter={AutoComplete.caseInsensitiveFilter}
        />
      </div>
    );
  }

}
