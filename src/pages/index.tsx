import Head from 'next/head'
import { Element } from 'react-scroll'

import Header from 'components/Header'
import Cover from 'components/Cover'

import MoTran from 'components/MoTran'
import WaxBeans from 'components/WaxBeans'
import NoiNung from 'components/NoiNung'
import Contact from 'components/Contact'
import WaxCoconut from 'components/WaxCoconut'
import Combo from 'components/Combo'
import Footer from 'components/Footer'

export default function Home(posts: any) {
  console.log('home', posts)
  return (
    <div>
      <Head>
        <title>Youngerist - Chuyên trang làm đẹp</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container mx-auto">
        <Header />
      </div>

      <Cover />

      <Element name="moTran">
        <MoTran />
      </Element>

      <Element name="waxBeans">
        <WaxBeans />
      </Element>

      <Element name="noiNung">
        <NoiNung />
      </Element>

      <Element name="waxCoconut">
        <WaxCoconut />
      </Element>

      <Element name="preAfterWax">
        <Combo />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </div>
  )
}
