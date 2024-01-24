import "uno.css";

import { createApp } from "vue";
/** 重置样式 这里引入自定义的重置样式也可 */
import "ant-design-vue/dist/reset.css";
/**
 *  项目内的样式，
 *  注意：最好放在重置样式后，uno.css前
 */
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");
