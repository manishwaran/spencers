import { PropTypes } from 'react';

export default {
  modal: PropTypes.bool,
  show: PropTypes.bool,
  title: PropTypes.string,
  onCancel: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.boolean,
  ]),
  onAccept: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.boolean,
  ]),
  message: PropTypes.string,
  children: PropTypes.element,
  style: PropTypes.objectOf(PropTypes.object),
};
