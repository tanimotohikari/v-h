export default {
  props: ['src'],
  data() {
    return {
      isFixed: false,
    };
  },
  created() {
    console.log('created');
    window.addEventListener('scroll', this.scrollHandler, false);
  },
  computed: {
    hoge(a) {

      console.log('computed');
      return a;
    },
  },
  methods: {
    scrollHandler() { },
  },
};
