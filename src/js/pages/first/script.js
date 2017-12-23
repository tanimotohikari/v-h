import Vue from 'vue';
import stepNavigation from '../../components/step-navigation';
import { pref } from '../../constants';

Vue.component('step-navigation', stepNavigation);

export default {
  data: function data() {
    return {
      pref,
    };
  },
  created: function created() {
    window.scrollTo(0, 0);
  },
  methods: {},
};
