import Vue from 'vue';
import stepNavigation from '../../components/step-navigation';

Vue.component('step-navigation', stepNavigation);

export default {
  data: function () {
    return {
      move: {
        type: '1',
      }
    }
  },
  methods: {
    isMoveTypeSelected: function () {
      return {}
    }
  }
};
