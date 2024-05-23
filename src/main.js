/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { UilVuejs } from '@iconscout/vue-unicons'

createApp(App)
.use(router)
.mount("#app");
