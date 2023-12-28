import { type AppType } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ClerkProvider } from '@clerk/nextjs';
import { api } from '@/utils/api';
import '@/styles/global.css';

const App: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <Component {...pageProps} />
        </NextThemesProvider>
      </NextUIProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(App);
