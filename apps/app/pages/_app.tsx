import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { UserProvider } from '@auth0/nextjs-auth0';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to app!</title>
      </Head>
      <main className="app">
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </main>
    </>
  );
}

export default CustomApp;
