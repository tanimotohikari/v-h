import Vue from 'vue';
import stepNavigation from '../../components/step-navigation';
import counter from '../../components/counter';
import { pref } from '../../constants';

Vue.component('step-navigation', stepNavigation);
Vue.component('counter', counter);

const furniture = {
  sofa1: {
    name: 'sofa1',
    count: 3,
    max: 9,
  },
  sofa2: {
    name: 'sofa2',
    count: 2,
    max: 19,
  },
  sofa3: {
    name: 'sofa3',
    count: 0,
    max: 9,
  },
  sofa4: {
    name: 'sofa4',
    count: 0,
    max: 19,
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
    incrementValue(name) {
      if (this.furniture[name].max <= this.furniture[name].count) return false;
      this.furniture[name].count++;
    },
    decrementValue(name) {
      if (this.furniture[name].count <= 0) return false;
      this.furniture[name].count--;
    },
    changeValue({ count, name }) {
      if (!count) {
        this.furniture[name].count = 0;
      } else {
        if (count <= 0) {
          this.furniture[name].count = 0;
        } else if (this.furniture[name].max <= count) {
          this.furniture[name].count = this.furniture[name].max;
        } else {
          this.furniture[name].count = Number(count);
        }
      }
    }
  },
};
