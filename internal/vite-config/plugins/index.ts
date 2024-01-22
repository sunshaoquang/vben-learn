import { type PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { createAppConfigPlugin } from "./appConfig";
import { configCompressPlugin } from "./compress";
import { configHtmlPlugin } from "./html";
interface IOptions {
  isBuild: boolean;
  root: string;
  compress: string;
  enableMock?: boolean;
  enableAnalyze?: boolean;
}
async function createPlugins({ isBuild, root, compress }: IOptions) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [vue(), vueJsx()];
  vitePlugins.push(configHtmlPlugin({ isBuild }));
  const appConfigPlugin = await createAppConfigPlugin({ root, isBuild });
  vitePlugins.push(appConfigPlugin);
  // The following plugins only work in the production environment
  if (isBuild) {
    // rollup-plugin-gzip
    vitePlugins.push(
      configCompressPlugin({
        compress,
      })
    );
  }
  // vite-plugin-html

  return vitePlugins;
}

export { createPlugins };
