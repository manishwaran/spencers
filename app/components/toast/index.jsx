import { observer } from 'mobx-react';
import React, { Component, PropTypes } from 'react';
import Snackbar from 'material-ui/Snackbar';
import FontIcon from 'material-ui/FontIcon';

import './style.scss';
import loaderImg from '../../assests/images/loader.gif';

@observer
export default class Toast extends Component {

  static propTypes = {
    message: PropTypes.shape({
      type: PropTypes.string,
      msg: PropTypes.string,
      loading: PropTypes.bool,
      success: PropTypes.bool,
    }),
    show: PropTypes.bool,
  }

  render() {
    const loadingMsg = (
      <div className="message">
        <img alt="loading" src={loaderImg} width="25px" height="25px" />
        &nbsp;&nbsp;{this.props.message.msg}
      </div>
    );
    const warnIcon = <i className="nc-icon-outline ui-3_alert warn" />;
    const errorIcon = <i className="nc-icon-outline ui-1_bold-remove error" />;
    const successIcon = <i className="nc-icon-outline ui-1_check-simple success" />;
    const failureIcon = (this.props.message.type === 'warn') ? warnIcon : errorIcon;
    const loadedMsg = (
      <span>
        { this.props.message.success ? successIcon : failureIcon }
      &nbsp;&nbsp;
        {this.props.message.msg}
      </span>
    );
    const message = this.props.message.loading ? loadingMsg : loadedMsg;

    return (
      <div className="component-toast">
        <FontIcon
          className="muidocs-icon-action-home"
          style={{ color: 'red' }}
        />
        <Snackbar
          open={this.props.show}
          message={message}
          autoHideDuration={5000}
          bodyStyle={{ background: 'black' }}
          contentStyle={{ color: 'white' }}
        />
      </div>
    );
  }

}
