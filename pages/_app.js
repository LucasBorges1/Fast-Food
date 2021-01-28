import Router from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <nav>
        <style jsx>{`
          a {
            margin: 0 0px 0 0;
          }
        `}</style>
        <Link href="/">
          <a></a>
        </Link>
        <Link href="/about">
          <a></a>
        </Link>
        <Link href="/forever">
          <a></a>
        </Link>
        <a href="/non-existing"></a>
      </nav>
      <Component {...pageProps} />
    </>
  )
}