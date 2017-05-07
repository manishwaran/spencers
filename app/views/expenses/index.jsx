import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import ExpensesBase from './base';
import { ExpencesStore } from '../../stores';
import { Table, AddExpense } from '../../components';

export default class Expenses extends ExpensesBase {

  render() {

    return (
      <div className="view-component clearfix">
        <div className="see-stats">
          <Link className="navigate-stats" to="/stats" >
            <RaisedButton
              secondary
              label="View Stats"
              style={{ margin: 12 }}
            />
          </Link>
        </div>
        <div className="expenses-list">
          <Table
            data={ExpencesStore.EXPENSES}
            columns={this.getTableHeader()}
            previousText="<<"
            nextText=">>"
            rowsText=""
            noDataText="Expense is not listed"
          />
        </div>
        <FloatingActionButton className="add-field-button" onClick={this.addNewList}>
          <ContentAdd />
        </FloatingActionButton>
        <AddExpense
          show={this.state.addNewList}
          saveNewList={this.saveNewList}
          cancelSaveAction={this.cancelSaveAction}
        />
      </div>
    );
  }

}
