import Vue from 'vue';
import stepNavigation from '../../components/step-navigation';
import constants from '../../constants';

Vue.component('step-navigation', stepNavigation);

export default {
  data: function data() {
    return {
      move: {
        type: '1',
      },
      prefectures: constants.prefectures,
    };
  },
  methods: {
    isMoveTypeSelected: function isMoveTypeSelected() {
      return {};
    },
  },
};
