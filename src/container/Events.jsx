import React from 'react'
import Navbar from '../components/Navbar'
import BlogCard from '../components/BlogCard'
import Footer from '../components/Footer'
import EventCard from '../components/EventCard'
import events from '../data/events.json'

export default function Events() {
    
    return (
        <div>
            <Navbar></Navbar>

            <section class="bg-white dark:bg-gray-900 pt-20">

                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-m text-center lg:mb-16 mb-8">
                        <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Etkinlik Takvimi</h2>
                        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">CASVAL bünyesinde içerik üretmekten keyif alan üyelerimizin hazırladığı bilgi arşivi.</p>
                    </div>
                    <span class="relative flex justify-center">
                        <div
                            class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                        ></div>

                        <span class="relative z-10 bg-white dark:bg-gray-900 mb-4 text-3xl lg:text-2xl tracking-tight font-bold text-gray-900 dark:text-white px-6">Öne Çıkanlar</span>
                    </span>
                    <div class="grid gap-8 max-w-5xl mx-auto lg:grid-cols-2">
                        {events.map((event, index) => (
                            <EventCard key={index} data={event} />
                        ))}

                    </div>
                    <span class="relative flex justify-center mt-12">
                        <div
                            class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                        ></div>

                        <span class="relative z-10 bg-white dark:bg-gray-900 mb-4 text-3xl lg:text-2xl tracking-tight font-bold text-gray-900 dark:text-white px-6">Online Etkinlikler</span>
                    </span>
                    <div class="grid gap-8 max-w-5xl mx-auto lg:grid-cols-2">
                        {events.filter(event => event.isOnline).map((event, index) => (
                            <EventCard key={index} data={event} />
                        ))}
                    </div>
                    <span class="relative flex justify-center mt-12">
                        <div
                            class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                        ></div>

                        <span class="relative z-10 bg-white dark:bg-gray-900 mb-4 text-3xl lg:text-2xl tracking-tight font-bold text-gray-900 dark:text-white px-6">Fiziksel Etkinlikler</span>
                    </span>
                    <div class="grid gap-8 max-w-5xl mx-auto lg:grid-cols-2">
                        {events.filter(event => !event.isOnline).map((event, index) => (
                            <EventCard key={index} data={event} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}
