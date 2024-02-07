import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard(props) {

    function calculateTimeAgo(createdAt) {
        const createdDate = new Date(createdAt);
        const currentDate = new Date();
        
        // Tarayıcının dil ayarını almak için navigator objesini kullanıyoruz.
        const locale = navigator.language;
      
        let differenceInSeconds = Math.floor((currentDate - createdDate) / 1000);
        let timeAgo = '';
      
        if (differenceInSeconds < 60) {
          // Son 1 dakika içindeyse
          timeAgo = new Intl.NumberFormat(locale).format(differenceInSeconds) + ' saniye';
        } else if (differenceInSeconds < 3600) {
          // Son 1 saat içindeyse
          const minutes = Math.floor(differenceInSeconds / 60);
          timeAgo = new Intl.NumberFormat(locale).format(minutes) + ' dakika';
        } else if (differenceInSeconds < 86400) {
          // Son 1 gün içindeyse
          const hours = Math.floor(differenceInSeconds / 3600);
          timeAgo = new Intl.NumberFormat(locale).format(hours) + ' saat';
        } else if (differenceInSeconds < 2592000) {
          // Son 1 ay (30 gün) içindeyse
          const days = Math.floor(differenceInSeconds / 86400);
          timeAgo = new Intl.NumberFormat(locale).format(days) + ' gün';
        } else if (differenceInSeconds < 31536000) {
          // Son 1 yıl içindeyse
          const months = Math.floor(differenceInSeconds / 2592000);
          timeAgo = new Intl.NumberFormat(locale).format(months) + ' ay';
        } else {
          // 1 yıldan eskiyse
          const years = Math.floor(differenceInSeconds / 31536000);
          timeAgo = new Intl.NumberFormat(locale).format(years) + ' yıl';
        }
      
        return timeAgo;
      }
      
      // Örnek kullanım:
      console.log(calculateTimeAgo("2024-01-02T00:00:00Z")); // Çıktı: Kaç saniye/dakika/saat/gün/ay/yıl önce olduğunu gösterir
      

    return (
        <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-between items-center mb-5 text-gray-500">
                <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                    <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                    Article
                </span>
                <span class="text-sm"> {calculateTimeAgo(props.data.createdAt)} önce </span>
            </div>
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">{props.data.title}</a></h2>
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">{props.data.content}</p>
            <div class="flex justify-between items-center">
                <div class="flex items-center space-x-4">
                    <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" />
                    <span class="font-medium dark:text-white">
                        {props.data.author}
                    </span>
                </div>
                <Link to="/blog-name" class="inline-flex items-center font-medium text-green-500 dark:text-green-400 hover:underline">
                    Read more
                    <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link>
            </div>
        </article>
    )
}
