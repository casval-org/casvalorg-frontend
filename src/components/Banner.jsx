import React, { useState } from 'react'

export default function Banner() {
    const [email, setEmail] = useState('');

    if (localStorage.getItem("subscribed") === "true") {
        return null
    } 

    function closeBanner(event) {
        event.preventDefault();
        document.getElementById("newsletter-banner").style.display = "none";
    }

    function subscribe(event) {
        event.preventDefault();
        localStorage.setItem("subscribed", true);
        closeBanner(event);

        fetch(process.env.REACT_APP_API_URL + '/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    return (
        <div id="newsletter-banner" tabindex="-1" class="fixed bottom-0 end-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div class="flex items-center flex-shrink-0 w-full mx-auto sm:w-auto">
                <form class="flex flex-col items-center w-full md:flex-row" onSubmit={subscribe}>
                    <label for="email" class="flex-shrink-0 mb-2 me-auto text-sm font-medium text-gray-500 md:mb-0 md:me-4 dark:text-gray-400 md:m-0">CASVAL Etkinlik ve Duyuru Bülteni'ne abone ol</label>
                    <input type="email" id="email" placeholder="Eposta adresi giriniz" class="bg-white border border-gray-300 text-gray-900 md:w-64 mb-2 md:mb-0 md:me-4 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required  onChange={e => setEmail(e.target.value)}/>
                    <button type="submit" class="text-white bg-green-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-400 dark:hover:bg-green-400 dark:focus:ring-green-500">Abone Ol</button>
                </form>
            </div>
            <div class="flex items-center absolute top-2.5 end-2.5 md:relative md:top-auto md:end-auto">
                <button data-dismiss-target="#newsletter-banner" onClick={closeBanner} type="button" class="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close banner</span>
                </button>
            </div>
        </div>

    )
}
