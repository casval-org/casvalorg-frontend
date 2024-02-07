import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function BlogDetail() {
    return (
        <div className='dark:bg-gray-900'>
            <Navbar></Navbar>
            <article className="max-w-2xl px-6 py-24 mx-auto space-y-16 dark:bg-gray-900 dark:text-gray-50">
                <div className="w-full mx-auto space-y-4">
                    <h1 className="text-5xl font-bold leadi">Interdum et malesuada fames ac ante ipsum primis in faucibus?</h1>
                    <div className="flex flex-wrap space-x-2 text-sm dark:text-gray-400">
                        <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#MambaUI</a>
                        <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#TailwindCSS</a>
                        <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#Angular</a>
                    </div>
                    <p className="text-sm dark:text-gray-400">by
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline dark:text-violet-400">
                            <span>Leroy Jenkins</span>
                        </a>on
                        <time datetime="2021-02-12 15:34:18-0200">Feb 12th 2021</time>
                    </p>
                </div>
                <div className="dark:text-gray-100">
                    <p>Insert the actual text content here...</p>
                    <p>Insert the actual text content here...</p>
                    <p>Insert the actual text content here...</p>
                    <p>Insert the actual text content here...</p>
                    <p>Insert the actual text content here...</p>
                    <p>Insert the actual text content here...</p>
                    <p>Insert the actual text content here...</p>
                    <p>Insert the actual text content here...</p>
                    <p>Insert the actual text content here...</p>
                    <p>Insert the actual text content here...</p>
                    <p>Insert the actual text content here...</p>
                    <p>Insert the actual text content here...</p>
                    <p>Insert the actual text content here...</p>
                    <p>Insert the actual text content here...</p>
                    <p>Insert the actual text content here...</p>
                    <p>Insert the actual text content here...</p>
                    <p>Insert the actual text content here...</p>
                </div>
            </article>
            <Footer></Footer>
        </div>
    )
}
