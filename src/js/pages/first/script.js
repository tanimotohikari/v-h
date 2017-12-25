import Vue from 'vue';
import { pref } from '../../constants';

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
