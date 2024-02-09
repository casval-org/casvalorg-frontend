import React from 'react'
import { Link } from 'react-router-dom'
import EventCard from './EventCard'
import events from '../data/events.json'

export default function BecomePartner() {
    function getEvents() {
        return events.filter(event => event.openToPartnership & (new Date(event.date) > new Date()))
    }
    return (


        <section class="bg-white p-10 dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Partner Ol!</h1>
                <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">CASVAL bilgi birikimini partnerleriyle paylaşmaktan gurur duymaktadır. Hem kendi etkinliklerinde hem de danışmanlık yaptığı etkinliklerde partner olabilir.</p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <Link target='_blank' to="https://forms.gle/x8hDRrg2iNHBtxWV7" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-400 dark:focus:ring-green-800">
                        Formu Doldurun
                        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>
            </div>
            <span class="relative flex justify-center ">
                        <div
                            class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                        ></div>

                        <span class="relative z-10 bg-white dark:bg-gray-900 mb-4 text-3xl lg:text-2xl tracking-tight font-bold text-gray-900 dark:text-white  px-6">Partnerliğe Açık Etkinlikler</span>
                    </span>
                    <div class="grid gap-8 max-w-5xl mx-auto dark:text-white lg:grid-cols-2">
                        {getEvents().map((event, index) => (
                            <EventCard key={index} data={event} />
                        ))}

                    </div>
        </section>
        

    )
}
