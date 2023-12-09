import '@/app/globals.scss';

import Layout from '../app/layout'

export default function MyApp({ Component, pageProps }: any) {
  return (
    <Layout>
      <title>{'AWSome Women Community Summit Brasil '}</title>
      <Component {...pageProps} />
    </Layout>
  )
}
