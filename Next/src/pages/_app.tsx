// src/pages/_app.tsx
import { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import '../styles/global.css';
import Header from '@/components/Header';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
    
export default App;
