import { Ref } from "vue";

export type DemoMode = "inpolite-popup" | "polite-popup";

const defaultDemoMode: DemoMode = "inpolite-popup";

export const useDemoMode = () => {
  const demoMode = useLocalStorage("demo-mode", defaultDemoMode);

  const updateMode = (newDemoMode: DemoMode) => {
    demoMode.value = newDemoMode;
  };

  return {
    demoMode,
    updateMode,
  };
};
