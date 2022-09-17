import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { UserProvider } from '@auth0/nextjs-auth0';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

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
