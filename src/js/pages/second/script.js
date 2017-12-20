import Vue from 'vue';
import stepNavigation from '../../components/step-navigation';
import counter from '../../components/counter';
import { pref } from '../../constants';

Vue.component('step-navigation', stepNavigation);
Vue.component('counter', counter);

const furniture = {
  sofa1: {
    name: 'sofa1',
    count: 5,
  },
  sofa2: {
    name: 'sofa2',
    count: 0,
  },
  sofa3: {
    name: 'sofa3',
    count: 0,
  },
  sofa4: {
    name: 'sofa4',
    count: 0,
  },
}

export default {
  data: function() {
    return {
      furniture,
    };
  },
  created: function created() {
    window.scrollTo(0, 0);
  },
  methods: {
    incrementValue(item) {
      this.furniture[item].count++;
    },
    decrementValue(item) {
      this.furniture[item].count--;
    }
  },
};
