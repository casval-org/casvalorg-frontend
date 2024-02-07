import React from 'react'
import { Link } from 'react-router-dom'
import TimelineItem from './TimelineItem'
import events from '../data/events.json'

export default function Timeline() {

    return (
        <div className='w-full p-6 dark:bg-gray-900 '>
            <div className='mx-auto max-w-4xl pt-20'>
                <div class="mx-auto max-w-3xl pb-6 text-center">
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Yaklaşan Etkinlikler</h2>
                </div>
                <ol class="relative border-s border-gray-200 dark:border-gray-700">
                    {events.filter(event => event.promote).map((event, index) => (
                        <TimelineItem key={index} data={event} />
                    ))}
                </ol>
                <Link to="/events" class="text-white p-2 bg-green-500 hover:bg-green-700 mt-6 focus:ring-4 focus:outline-none focus:ring-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Tümünü Gör
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </div>


    )
}
