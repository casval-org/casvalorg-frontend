import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Jumbotron from '../components/Jumbotron'
import Timeline from '../components/Timeline'
import Stats from '../components/Stats'

import BecomePartner from '../components/BecomePartner'
import { Helmet } from 'react-helmet'

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>CASVAL | Create & Share Value</title>
                <meta name="description" content="Bulunduğu her ortamda durmaksızın değer üreten ve bu değeri paylaşan aktif beyinler topluluğu." />
                <meta name="keywords" content="CASVAL, Create and Share Value, Etkinlikler, Partnerlik" />
            </Helmet>
            <Navbar />
            <Jumbotron />
            {/* <Slider /> */}
            <Timeline />
            <Stats />
            {/* <TrustedComp/> */}

            {/* <Blog/> */}
            <BecomePartner />

            <Footer />
            {/* <Dial/> */}
            <Banner />
        </div>
    )
}
