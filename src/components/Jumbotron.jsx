import React from 'react'
import { Link } from 'react-router-dom'

export default function Jumbotron() {
    return (


        <section class="bg-white pt-20 dark:bg-gray-900">
            <div class="py-8 mx-auto px-4 max-w-screen-xl text-center lg:py-16">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Create & Share Value</h1>
                <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Bulunduğu her ortamda durmaksızın değer üreten ve bu değeri paylaşan aktif beyinler topluluğu.</p>
                <div class="flex flex-col my-4 space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <Link target='_blank' to="https://forms.gle/tXcMN3wyEvrABjUDA" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-400 dark:focus:ring-green-800">
                        Topluluğa Katıl
                        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                    {/* <Link to="/about" class="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Nedir?
                    </Link> */}
                </div>
            </div>
            <div className='mx-auto max-w-screen-md text-center'>
                <h1 class="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Kariyer Günleri Zirvesi'2024</h1>

                <iframe className='mx-auto w-full  aspect-video' src="https://www.youtube.com/embed/sGlan8dcak4?si=THlBJesy2uui6uob&amp;start=277" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>

        </section>

    )
}
