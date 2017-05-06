import { action } from 'mobx';

import { UtilsStore } from '../../stores';

class ActionUtils {

  @action('Toast show')
  showToast() {
    UtilsStore.SHOW_TOAST = true;
  }

  @action('Toast message set')
  setToastMessage(loading = true, success = false, msg = '') {
    UtilsStore.TOAST_MESSAGE = {
      msg,
      loading,
      success,
    };
  }

}

export default new ActionUtils();
