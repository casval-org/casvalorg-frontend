import React from 'react'

export default function Stats() {
    var stats = [
        {
            title: "Toplam Etkinlik",
            count: "46"
        },
        {
            title: "Katılımcı Sayısı",
            count: "23.000+"
        },
        {
            title: "Üye Sayısı",
            count: "124"
        }
    ]
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="mx-auto max-w-screen-xl px-4 py-12 pt-20 sm:px-6 md:py-16 lg:px-8">
                <div class="mx-auto max-w-3xl text-center">
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Binlerce Kişiye Değer Ulaştırdık</h2>

                    {/* <p class="mt-4 text-gray-500 sm:text-xl dark:text-gray-400">
                        O
                    </p> */}
                </div>

                <div class="mt-8 sm:mt-12">
                    <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
                        <div class="flex flex-col px-4 py-8 text-center">
                            <dt class="order-last text-lg font-medium text-gray-500 dark:text-white">Toplam Etkinlik</dt>

                            <dd class="text-4xl font-extrabold text-green-500 md:text-5xl">{ stats[0].count }</dd>
                        </div>

                        <div class="flex flex-col px-4 py-8 text-center">
                            <dt class="order-last text-lg font-medium text-gray-500 dark:text-white">Katılımcı Sayısı</dt>

                            <dd class="text-4xl font-extrabold text-green-500 md:text-5xl">{stats[1].count}</dd>
                        </div>

                        <div class="flex flex-col px-4 py-8 text-center">
                            <dt class="order-last text-lg font-medium text-gray-500 dark:text-white">Üye Sayısı</dt>

                            <dd class="text-4xl font-extrabold text-green-500 md:text-5xl">{stats[2].count}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    )
}
