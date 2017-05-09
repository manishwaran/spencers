import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

import './style.scss';
import PropTypes from './proptypes';
import constants from '../../constants';
import CategoryValue from './category-value';

export default class SelectCategory extends Component {

  static propTypes = PropTypes;

  constructor(props) {
    super(props);
    this.deleteValue = this.deleteValue.bind(this);
    this.onNewRequest = this.onNewRequest.bind(this);
    this.onUpdateInput = this.onUpdateInput.bind(this);
    this.state = {
      searchText: '',
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

  getCategoryValues() {
    return this.state.values.map((value, index) => (
      <CategoryValue
        value={value}
        index={index}
        key={index}
        deleteValue={this.deleteValue}
      />
    ));
  }

  deleteValue(index) {
    const values = this.state.values;
    values.splice(index, 1);
    this.setState({ values });
  }

  render() {
    const categoryValues = this.getCategoryValues();
    return (
      <div className="component-category">
        <AutoComplete
          maxSearchResults={5}
          floatingLabelText="Select Category (hit enter)"
          onChange={this.onChange}
          searchText={this.state.searchText}
          onNewRequest={this.onNewRequest}
          onUpdateInput={this.onUpdateInput}
          dataSource={constants.defaultCategory}
          filter={AutoComplete.caseInsensitiveFilter}
        />
        <div className="component-category-values">
          {categoryValues}
        </div>
      </div>
    );
  }

}
