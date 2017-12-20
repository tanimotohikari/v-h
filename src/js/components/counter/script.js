export default {
  props: {
    count: {
      type: Number,
      required: true,
    },
    max: {
      type: String,
      required: false,
      validator: function (value) {
        return value || 9
      }
    }
  },
  data: function () {
    return {};
  },
  created() {},
  methods: {
    incrementCounter() {

      this.$emit('increment')
    },
    decrementCounter() {
      this.$emit('decrement')
    }
  },
};
