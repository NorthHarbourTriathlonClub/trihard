import { type AppType } from 'next/app';
// import { api } from '@/utils/api';
import '@/styles/global.css';
import { NextUIProvider } from '@nextui-org/react';

const App: AppType = ({ Component, pageProps }) => {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
};

export default App;

// export default api.withTRPC(App);
