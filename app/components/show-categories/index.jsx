import React, { Component } from 'react';

import './style.scss';
import Modal from '../modal';
import Category from './category';
import PropTypes from './proptypes';

export default class Categories extends Component {

  static propTypes = PropTypes;

  constructor(props) {
    super(props);
    this.state = {
      showStats: false,
      statsTitle: '',
    };
  }

  onViewedStats() {
    this.setState({ showStats: false, statsTitle: '' });
  }

  getCategoryComponent() {
    const data = this.props.data;
    return data.map(item => (
      <Category
        key={item}
        category={item}
        showDailyStats={this.props.showDailyStats}
        showMonthlyStats={this.props.showMonthlyStats}
      />
    ));
  }

  viewStats(statsTitle) {
    this.setState({ showStats: true, statsTitle });
  }

  render() {
    const allCategories = this.getCategoryComponent();
    return (
      <div className="component-categories">
        <div className="categories">
          {allCategories}
        </div>
        <Modal
          title="Add New Expense"
          show={this.props.showStats}
          onAccept={this.saveNewList}
        />
      </div>
    );
  }

}
