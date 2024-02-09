import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BecomePartner from '../components/BecomePartner'
import { Helmet } from 'react-helmet'

export default function Partnership() {
  return (
    <div>
       <Helmet>
                <title>CASVAL | Partnerlik</title>
                <meta name="description" content="CASVAL bilgi birikimini partnerleriyle paylaşmaktan gurur duymaktadır. Hem kendi etkinliklerinde hem de danışmanlık yaptığı etkinliklerde partner olabilir." />
                <meta name="keywords" content="CASVAL, Create and Share Value, Etkinlikler, Online Etkinlikler, Fiziksel Etkinlikler, TEDx, Zirve" />
            </Helmet>
      <Navbar></Navbar>
      <section class="bg-white dark:bg-gray-900 ">
        <BecomePartner></BecomePartner>
      </section>
      <Footer></Footer>
    </div>
  )
}
