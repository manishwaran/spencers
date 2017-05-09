/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { Component } from 'react';

import PropTypes from './proptypes';

export default class SelectCategory extends Component {

  static propTypes = PropTypes;

  render() {
    return (
      <div className="component-category-value">
        <div className="value">
          {this.props.value}
        </div>
        <div
          className="delete"
          onClick={() => this.props.deleteValue(this.props.index)}
        >
          x
        </div>
      </div>
    );
  }

}
