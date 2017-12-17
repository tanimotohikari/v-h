export default {
  props: ['src'],
  data() {
    return {
      isFixed: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.scrollHandler, false);
  },
  methods: {
    scrollHandler(e) {},
  },
};
