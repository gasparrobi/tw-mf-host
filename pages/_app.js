import "../styles/globals.css";
import install from '@twind/with-next/app'
import config from '../twind.config'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default install(config, MyApp)
