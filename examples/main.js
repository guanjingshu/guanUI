import Vue from "vue";
import App from "./App.vue";

// import "../components/css/demo.scss";
// import "../components/css/card.scss";
// import DemoTe from "../components/lib/demo/index";
// import Card from "../components/lib/card/index";
// Vue.use(DemoTe);
// Vue.use(Card);

// import "gjsui/dist/css/card.scss";
// import "gjsui/dist/css/index.ccss";
// import "gjsui/dist/css/index.css";
// import GUI from "gjsui";
// Vue.use(GUI);

// import "gjsui/dist/css/index.css";
// import Demo from 'gjsui/dist/demo.umd'
// import Card from 'gjsui/dist/card.umd'

// Vue.use(Demo)

// Vue.use(Card)

import "gjsui/dist/css/demo.css";
import Demo from "gjsui";
Vue.use(Demo);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
