import Vue from 'vue';
import { mapState } from 'vuex';
import constants from '../../constants';
import stepNavigation from '../../components/step-navigation';

Vue.component('step-navigation', stepNavigation);

export default {
  data: function data() {
    return {
      models: {
        current_zip_code: this.$store.state.current_zip_code,
        move_type: this.$store.state.move_type,
        new_prefecture_id: this.$store.state.new_prefecture_id,
      },
      settings: {
        prefectures: constants.prefectures,
      }
    };
  },
  methods: {
    updateStore: function updateStore(e) {
      console.log(this.$data.models);
      // TODO: commit!!
      console.log(e);
    },
  },

};
