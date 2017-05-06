import { observable } from 'mobx';

class ExpencesStore {

  @observable EXPENSES = [];

}

export default new ExpencesStore();
