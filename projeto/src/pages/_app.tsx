import { Header } from '@/components/header';
import '../styles/globals.css';
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react"
import session from '../../node_modules/next-auth/core/routes/session.d';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
    <Header />
  <Component {...pageProps} />
  </SessionProvider>
  );
}
