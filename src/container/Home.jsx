import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Jumbotron from '../components/Jumbotron'
import Blog from '../components/BlogSection'
import Dial from '../components/Dial'
import Timeline from '../components/Timeline'
import Stats from '../components/Stats'
import TrustedComp from '../components/TrustedComp'
import BecomePartner from '../components/BecomePartner'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Jumbotron/>
            {/* <Slider /> */}
            <Timeline/>
            <Stats/>
            {/* <TrustedComp/> */}

            {/* <Blog/> */}
            <BecomePartner/>

            <Footer/>
            {/* <Dial/> */}
            <Banner />
        </div>
    )
}
