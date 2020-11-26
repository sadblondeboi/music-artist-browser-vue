export var HeaderOffsetMixin = {
  data() {
    return {
      headerHeight: "0px",
    };
  },
  computed: {
    headerTopOffset() {
      return {
        "padding-top": this.headerHeight,
      };
    },
  },
  mounted() {
    this.updateHeaderHeight();
    addEventListener("resize", this.updateHeaderHeight.bind(this));
  },
  methods: {
    updateHeaderHeight() {
      const header = document.querySelector("header");
      this.headerHeight = `${header.offsetHeight}px`;
    }
  },
  beforeDestroy() {
    removeEventListener("resize", this.updateHeaderHeight);
  },
};
