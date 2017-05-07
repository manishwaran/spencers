import React, { Component } from 'react';
import { observer } from 'mobx-react';

import './style.scss';
import propTypes from './proptypes';
import { StatsActions } from '../../actions';
import { Categories } from '../../components';
import { StatsStore } from '../../stores';

@observer
export default class Stats extends Component {

  static propTypes = propTypes;

  constructor(props) {
    super(props);
    this.expensesActions = new StatsActions();
  }

  componentWillMount() {
    this.expensesActions.getCategories();
  }

  render() {
    console.log(StatsStore.CATEGORIES);
    return (
      <div className="view-stats">
        <Categories
          data={StatsStore.CATEGORIES || []}
        />
      </div>
    );
  }

}
