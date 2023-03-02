export const initMocks = () => {
  if (import.meta.env.VITE_REACT_APP_API_MOCKING === 'true') {
    const start = async () => {
      const browser = await import('./browser');
      browser.worker.start({
        serviceWorker: {
          url: import.meta.env.BASE_URL + 'mockServiceWorker.js',
        },
        onUnhandledRequest: 'bypass',
      });
    };
    start();
  }
};
