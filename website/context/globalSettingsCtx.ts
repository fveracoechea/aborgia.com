import { ComponentSettingsTheme } from "apollo/generated";
import { createContext, useContext } from "react";

export type GlobalSettingsValue = {
  siteName: string;
  route: string;
  favicon: string;
  theme: ComponentSettingsTheme | {};
};

export const GlobalSettingsCtx = createContext<GlobalSettingsValue>({
  siteName: "Arelys Borgia",
  favicon: "",
  theme: {},
  route: "",
});

export const useGlobalSettingsCtx = () => useContext(GlobalSettingsCtx);
