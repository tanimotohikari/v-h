import Vue from 'vue';
import counter from '../../components/counter';
import { pref } from '../../constants';

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