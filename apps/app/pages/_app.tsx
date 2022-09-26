import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { UserProvider } from '@auth0/nextjs-auth0';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import {useCore} from "../hooks/useCore";

config.autoAddCss = false;

function CustomApp({ Component, pageProps }: AppProps) {
  const core = useCore();
  return (
    <>
      <Head>
        <title>ActionRSE App</title>
      </Head>
      <main className="app">
        <UserProvider>
          <Component {...pageProps} core={core} />
        </UserProvider>
      </main>
    </>
  );
}

export default CustomApp;
