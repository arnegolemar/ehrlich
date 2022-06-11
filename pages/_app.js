
import '../styles/globals.css'

import NonAuth from '../components/Layouts/NonAuth';

function MyApp({ Component, pageProps }) {
  return (
    <NonAuth>
      <Component {...pageProps} />
    </NonAuth>
  )
}

export default MyApp
