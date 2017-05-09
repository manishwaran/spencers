import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

import './style.scss';
import Modal from '../modal';
import SelectCategory from '../select-category';
import AddExpenseBase from './base';

export default class AddExpense extends AddExpenseBase {

  render() {
    return (
      <div className="component-add-expense">
        <Modal
          title="Add New Expense"
          show={this.props.show}
          onAccept={this.saveNewList}
          onCancel={this.props.cancelSaveAction}
        >
          <div
            className="expense-form"
            style={{ display: 'flex', flexDirection: 'column', marginLeft: 40 }}
          >
            <TextField
              hintText="Enter Title"
              floatingLabelText="Title"
              type="text"
              onChange={(e, v) => this.updateAddEpense(v, 'title', 'string')}
            />
            <TextField
              hintText="Enter Amount"
              floatingLabelText="Amount"
              type="text"
              onChange={(e, v) => this.updateAddEpense(v, 'amount', 'number')}
            />
            <div className="category">
              <SelectCategory updateAddEpense={this.updateAddEpense} />
            </div>
            <DatePicker
              hintText="Select Date"
              onChange={(e, v) => this.updateAddEpense(v, 'date', 'date')}
            />
            <TextField
              multiLine
              rows={1}
              rowsMax={4}
              hintText="Enter Notes (optional)"
              onChange={(e, v) => this.updateAddEpense(v, 'notes', 'string')}
            />
          </div>
        </Modal>
      </div>
    );
  }

}
