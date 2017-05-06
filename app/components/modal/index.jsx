import Dialog from 'material-ui/Dialog';
import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

import PropTypes from './proptypes';

export default class Modal extends Component {

  static propTypes = PropTypes;

  constructor(props) {
    super(props);
    this.onCancel = this.onCancel.bind(this);
  }

  onCancel() {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  }

  render() {
    const actions = [
      this.props.onCancel ? <FlatButton label="Cancel" onTouchTap={this.props.onCancel} /> : null,
      this.props.onAccept ? <FlatButton label="Ok" secondary onTouchTap={this.props.onAccept} /> : null,
    ].filter(x => x);

    return (
      <Dialog
        actions={actions}
        open={this.props.show}
        title={this.props.title}
        modal={this.props.modal}
        onRequestClose={this.onCancel}
      >
        {this.props.message || this.props.children}
      </Dialog>
    );
  }

}
