import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Partnership() {
  return (
    <div>
      <Navbar></Navbar>
      <section class="bg-white dark:bg-gray-900 pt-20">

        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-m text-center lg:mb-16 mb-8">
            <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Partner Olun</h2>
            <p class="font-light max-w-screen-md mx-auto text-gray-500 sm:text-xl dark:text-gray-400">Beraber üretelim. CASVAL bilgi birikimini partnerleriyle paylaşmaktan gurur duymaktadır. Hem kendi etkinliklerinde hem de danışmanlık yaptığı etkinliklerde partner olabilir.</p>

            
          </div>

          <div class="flex flex-col space-y-4 p-14 sm:flex-row sm:justify-center sm:space-y-0">
            <Link target='_blank' to="https://forms.gle/x8hDRrg2iNHBtxWV7" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-400 dark:focus:ring-green-800">
              Forma Git
              <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
          </div>

          {/* <form class="max-w-sm mx-auto">
            <div class="mb-5">
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
            </div>
            <div class="mb-5">
              <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Company</label>
              <input type="text" id="company" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
            </div>
            <div class="mb-5">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
            </div>
            <div class="mb-5">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
              <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            </div>
          </form> */}

        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}
