export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: false,
      validator: function (value) {
        return value || 9
      }
    }
  },
  data: function () {
    return {};
  },
  created: function created () {},
  computed: {},
  methods: {
    incrementCounter(name) {
      this.$emit('increment', name)
    },
    decrementCounter(name) {
      this.$emit('decrement', name)
    },
    updateInput(name, event) {
      const count = event.target.value;
      this.$emit('changeInput', { count, name })
    }
  },
};
