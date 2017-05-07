import { observable } from 'mobx';

class StatsStore {

  @observable STATS = [];
  @observable CATEGORIES = [];

}

export default new StatsStore();
