import React from 'react'

export default function TimelineItem(props) {
    const date = new Date(props.data.date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('tr-TR', options); // "2 Mart 2024" formatında tarih // "gün/ay/yıl" formatında tarih
    return (
        <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{formattedDate}</time>
            <img class="max-w-xs py-2" src={props.data.banner} alt="" />

            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{props.data.title}</h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{props.data.description}</p>
            {false ? <a target='_blank' href={props.data.discount} class="m-1 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-green-600 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-green-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">CASVAL.org Özel İndirim <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg></a> : null}
            {props.data.eventPage ? <a target='_blank' href={props.data.eventPage} class="m-1 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-green-600 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-green-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Etkinlik Sayfası <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg></a> : null}
        </li>

    )
}
