export const useGlobalStore = defineStore("global", () => {
  // Resize
  const currentWindowSize = ref(null);
  const screenSize = computed(() => {
    if (currentWindowSize.value > 0 && currentWindowSize.value < 600)
      return "xs";
    if (currentWindowSize.value > 600 && currentWindowSize.value < 960)
      return "sm";
    if (currentWindowSize.value > 960 && currentWindowSize.value < 1280)
      return "md";
    if (currentWindowSize.value > 1280 && currentWindowSize.value < 1920)
      return "lg";
    if (currentWindowSize.value > 1920) return "xl";
  });
  const isSmallScreen = computed(() => {
    return screenSize.value == "xs" || screenSize.value == "sm";
  });
  const handleResize = () => {
    currentWindowSize.value = window.innerWidth;
  };

  // Scroll
  const scrollDirection = ref(null);
  const handleScroll = (lastScrollTop) => {
    const scrollTopPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTopPosition > lastScrollTop.value) {
      scrollDirection.value = "down";
    } else if (scrollTopPosition < lastScrollTop.value) {
      scrollDirection.value = "up";
    }
    lastScrollTop.value = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
  };

  // Loading
  const AppInitLoading = ref(true);
  const pageLoading = ref(false);

  return {
    screenSize,
    isSmallScreen,
    handleResize,
    handleScroll,
    scrollDirection,
    AppInitLoading,
    pageLoading,
  };
});
