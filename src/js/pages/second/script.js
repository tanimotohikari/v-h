import Vue from 'vue';
import stepNavigation from '../../components/step-navigation';
import counter from '../../components/counter';
import { pref } from '../../constants';

Vue.component('step-navigation', stepNavigation);
Vue.component('counter', counter);

export default {
  data: function data() {
    return {
      pref
    };
  },
  created: function created() {
    window.scrollTo(0, 0);
  },
  methods: {},
};