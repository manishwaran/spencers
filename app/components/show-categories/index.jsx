import React, { Component } from 'react';

import './style.scss';
import Category from './category';
import PropTypes from './proptypes';
import defaultProps from './default-props';


export default class Categories extends Component {

  static propTypes = PropTypes;
  static defaultProps = defaultProps;

  getCategoryComponent() {
    const data = this.props.data;
    return data.map(item => (
      <Category
        key={item}
        name={item}
        showDailyStats={this.props.showDailyStats}
      />
    ));
  }

  render() {
    const allCategories = this.getCategoryComponent();
    return (
      <div className="component-categories">
        <div className="categories">
          {allCategories}
        </div>
      </div>
    );
  }

}
