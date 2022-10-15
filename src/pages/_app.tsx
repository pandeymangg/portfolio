import 'tailwindcss/tailwind.css';
import '../../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
