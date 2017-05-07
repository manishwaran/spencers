import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

import './style.scss';
import PropTypes from './proptypes';

export default class Categories extends Component {

  static propTypes = PropTypes;

  render() {
    return (
      <div className="component-category panel panel-default">
        <div className="category-name">
          {this.props.name}
        </div>
        <FlatButton
          primary
          label="Daily Stats"
          style={{ margin: 12 }}
        />
        <FlatButton
          primary
          label="Monthly Stats"
          style={{ margin: 12 }}
        />
      </div>
    );
  }

}
