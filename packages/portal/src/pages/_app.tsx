import { type AppType } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { api } from '@/utils/api';
import '@/styles/global.css';

const App: AppType = ({ Component, pageProps }) => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default api.withTRPC(App);
