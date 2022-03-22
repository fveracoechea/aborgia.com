import pluginPkg from "../../package.json";
import pluginId from "./pluginId";
import ColorPicker from "./components/ColorPicker";
import Initializer from "./components/Initializer";

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.addFields({ type: "colorpicker", Component: ColorPicker });

    app.registerPlugin({
      id: pluginId,
      isReady: true,
      initializer: Initializer,
      name,
    });
  },
  bootstrap() {},
};
