import { observable } from 'mobx';

class UtilsStore {

  @observable SHOW_TOAST = false;
  @observable TOAST_MESSAGE = {
    loading: true,
    msg: '',
  };

}

export default new UtilsStore();
