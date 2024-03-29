import React from 'react'

export default function EventCard(props) {
    const isPastEvent = new Date(props.data.date) < new Date();
    const date = new Date(props.data.date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('tr-TR', options); // "2 Mart 2024" formatında tarih
    return (
        <article class={`p-6 ${isPastEvent ? 'bg-gray-200' : 'bg-white'} rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700`}>
            <div class="flex justify-between items-center mb-5 text-gray-500">
                <div>
                    <span class="bg-green-100 text-green-800 text-xs m-1 font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800">
                        <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                        {formattedDate}
                    </span>

                </div>

                <span class="text-sm"> { } </span>
            </div>
            <img class={`rounded-lg ${isPastEvent ? 'filter grayscale' : ''}`} src={props.data.banner} alt="" />
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4"><a target='_blank' href={props.data.eventPage}>{props.data.title}</a></h2>
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">{props.data.description}</p>
            <div id="organizator" class="flex justify-between items-center">
                <div class="flex items-center  space-x-4">
                    <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" />
                    <span class="font-medium dark:text-white">
                        {props.data.organizer}
                    </span>
                </div>
                <a target='_blank' href={props.data.eventPage} class="inline-flex items-center  font-medium text-green-500 dark:text-green-400 hover:underline">
                    İncele
                    <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </article>
    )
}
