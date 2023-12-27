import { type AppType } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { api } from '@/utils/api';
import '@/styles/global.css';

const App: AppType = ({ Component, pageProps }) => {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
};

export default api.withTRPC(App);
