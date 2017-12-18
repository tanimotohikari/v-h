import Vue from 'vue';
import stepNavigation from '../../components/step-navigation';

Vue.component('step-navigation', stepNavigation);

export default {
  data: function data() {
    return {};
  },
  created: function created() {
    window.scrollTo(0, 0);
  },
  methods: {},
};
