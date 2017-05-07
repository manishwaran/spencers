import React from 'react';
import AppBar from 'material-ui/AppBar';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import ExpensesBase from './base';
import constants from '../../constants';
import { Table, AddExpense } from '../../components';
import { ExpencesStore } from '../../stores';
import logo from '../../assests/images/spencers-logo.png';

export default class Expenses extends ExpensesBase {

  render() {
    const title = (
      <div className="title col-sm-2">
        <a href="/" className="appbar-logo">
          <img className="appbar-img" src={logo} alt="Spencers logo" />
        </a>
        SPENCERS
      </div>
    );

    return (
      <div className="view-component">
        <AppBar title={title} showMenuIconButton={false} style={{ paddingLeft: 10 }} />
        <div className="expenses-list">
          <Table
            data={ExpencesStore.EXPENSES}
            columns={constants.expensesTableHeader}
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
