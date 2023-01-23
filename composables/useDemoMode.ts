import { Ref } from 'vue';

export type DemoMode = 'impolite-popup' | 'polite-popup';

const defaultDemoMode: DemoMode = 'impolite-popup';

export const useDemoMode = () => {
  const route = useRoute();

  console.log('query', route.query);

  const demoMode = useLocalStorage('demo-mode', defaultDemoMode);

  const updateMode = (newDemoMode: DemoMode) => {
    demoMode.value = newDemoMode;
  };

  watch(
    () => route.query,
    (newQuery) => {
      if (newQuery?.demoMode) {
        demoMode.value = newQuery.demoMode;
      }
    },
    { immediate: true }
  );

  return {
    demoMode,
    updateMode,
  };
};
