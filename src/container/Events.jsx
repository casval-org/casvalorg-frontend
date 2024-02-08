import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EventCard from '../components/EventCard'
import events from '../data/events.json'
import { useState } from 'react'

export default function Events() {
    const [filter, setFilter] = useState(0)

    function getEvents() {
        switch (filter) {
            case 0:
                return events
            case 1:
                return events.filter(event => event.isOnline)
            case 2:
                return events.filter(event => !event.isOnline)
            case 3:
                return events.filter(event => new Date(event.date) < new Date())
            default:
                return events
        }
    }
    return (
        <div>
            <Navbar></Navbar>
            <section class="bg-white dark:bg-gray-900 pt-20">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-m text-center lg:mb-16 mb-8">
                        <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 ">Etkinlik Takvimi</h2>
                        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400"> dark:text-whiteCASVAL bünyesinde içerik üretmekten keyif alan üyelerimizin hazırladığı etkinlik arşivi.</p>
                    </div>
                    <div className="flex justify-center rounded-md shadow-sm my-4">
                        <a 
                            className={`px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10   dark:bg-gray-700 dark:border-gray-600  dark:hover:bg-gray-600 ${filter === 0 ? 'text-green-400 dark:focus:text-white' : 'text-gray-900 dark:text-white hover:text-green-500 dark:hover:text-white'}`}
                            onClick={() => setFilter(0)}
                        >
                            Tüm Etkinlikler
                        </a>
                        <a 
                            className={`px-4 py-2 text-sm font-medium bg-white border-t border-b border-gray-200 hover:bg-gray-100 focus:z-10   dark:bg-gray-700 dark:border-gray-600  dark:hover:bg-gray-600 ${filter === 1 ? 'text-green-400  dark:focus:text-white' : 'text-gray-900 hover:text-green-500 dark:text-white dark:hover:text-white'}`}
                            onClick={() => setFilter(1)}
                        >
                            Online
                        </a>
                        <a 
                            className={`px-4 py-2 text-sm font-medium bg-white border-t border-b border-gray-200 hover:bg-gray-100 focus:z-10   dark:bg-gray-700 dark:border-gray-600  dark:hover:bg-gray-600 ${filter === 2 ? 'text-green-400 dark:focus:text-white' : 'text-gray-900 dark:text-white hover:text-green-500 dark:hover:text-white'}`}
                            onClick={() => setFilter(2)}
                        >
                            Fiziksel
                        </a>
                        <a 
                            className={`px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 focus:z-10  dark:bg-gray-700 dark:border-gray-600  dark:hover:bg-gray-600 ${filter === 3 ? 'text-green-400 dark:focus:text-white' : 'text-gray-900 dark:text-white hover:text-green-500 dark:hover:text-white'}`}
                            onClick={() => setFilter(3)}
                        >
                            Geçmiş
                        </a>
                    </div>
                    <span class="relative flex justify-center">
                        <div
                            class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                        ></div>

                        <span class="relative z-10 bg-white dark:bg-gray-900 mb-4 text-3xl lg:text-2xl tracking-tight font-bold text-gray-900  px-6">Ekinlik Listesi</span>
                    </span>
                    <div class="grid gap-8 max-w-5xl mx-auto dark:text-white lg:grid-cols-2">
                        {getEvents().map((event, index) => (
                            <EventCard key={index} data={event} />
                        ))}

                    </div>
                    
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}
