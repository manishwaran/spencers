import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { observer } from 'mobx-react';
import React, { Component } from 'react';

import './style.scss';
import propTypes from './proptypes';
import defaultProps from './default-props';

@observer
export default class DataTable extends Component {

  static propTypes = propTypes;
  static defaultProps = defaultProps;

  render() {
    return (
      <div className="component-data-table">
        <ReactTable
          className="-striped -highlight"
          noDataText={this.props.noDataText}
          previousText={this.props.previousText}
          nextText={this.props.nextText}
          rowsText={this.props.rowsText}
          defaultPageSize={10}
          data={this.props.data}
          columns={this.props.columns}
        />
      </div>
    );
  }

}
