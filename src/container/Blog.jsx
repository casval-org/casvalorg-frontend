import React from 'react'
import Navbar from '../components/Navbar'
import BlogCard from '../components/BlogCard'
import Footer from '../components/Footer'

export default function Blog() {
    const posts = [
        {
            "id": "507f191e810c19729de860ea1",
            "title": "MongoDB ile Modern Uygulamalar",
            "content": "MongoDB'nin esnek yapısı ve hızlı sorgu performansı...",
            "author": "507f191e810c19729de860ea",
            "createdAt": "2024-01-08T00:00:00Z",
            "updatedAt": "2024-01-08T00:00:00Z"
        },
        {
            "id": "507f191e810c19729de860ea2",
            "title": "Node.js ve Express Kullanarak RESTful API Geliştirme",
            "content": "Node.js, JavaScript tabanlı sunucu tarafı uygulamalar...",
            "author": "507f191e810c19729de860eb",
            "createdAt": "2024-01-07T00:00:00Z",
            "updatedAt": "2024-01-07T00:00:00Z"
        },
        {
            "id": "507f191e810c19729de860ea3",
            "title": "Full Stack Geliştiricinin Araç Kutusu",
            "content": "Full stack geliştiriciler için en popüler araçlar ve kütüphaneler...",
            "author": "507f191e810c19729de860ec",
            "createdAt": "2024-01-06T00:00:00Z",
            "updatedAt": "2024-01-06T00:00:00Z"
        },
        {
            "id": "507f191e810c19729de860ea4",
            "title": "JavaScript'te Asenkron Programlama Modelleri",
            "content": "Callback'lerden Promises'e ve Async/Await'e asenkron programlama...",
            "author": "507f191e810c19729de860ed",
            "createdAt": "2024-01-05T00:00:00Z",
            "updatedAt": "2024-01-05T00:00:00Z"
        },
        {
            "id": "507f191e810c19729de860ea5",
            "title": "Veritabanı İşlemlerinde ACID Özellikleri",
            "content": "Atomiklik, Tutarlılık, İzolasyon ve Dayanıklılık kavramları...",
            "author": "507f191e810c19729de860ee",
            "createdAt": "2024-01-04T00:00:00Z",
            "updatedAt": "2024-01-04T00:00:00Z"
        },
        {
            "id": "507f191e810c19729de860ea6",
            "title": "React ile SPA Uygulamaları Oluşturma",
            "content": "Tek sayfa uygulamaları (SPA), React kullanarak nasıl daha hızlı ve etkili oluşturulur...",
            "author": "507f191e810c19729de860ef",
            "createdAt": "2024-01-03T00:00:00Z",
            "updatedAt": "2024-01-03T00:00:00Z"
        },
        {
            "id": "507f191e810c19729de860ea7",
            "title": "Mikroservis Mimarisinin Temelleri",
            "content": "Büyük ve karmaşık uygulamaları küçük, yönetilebilir mikroservislere bölme...",
            "author": "507f191e810c19729de860f0",
            "createdAt": "2024-01-02T00:00:00Z",
            "updatedAt": "2024-01-02T00:00:00Z"
        },
        {
            "id": "507f191e810c19729de860ea8",
            "title": "Docker ve Kubernetes ile Konteyner Yönetimi",
            "content": "Uygulamalarınızı konteynerlerde nasıl paketleyip dağıtabileceğinizi öğrenin...",
            "author": "507f191e810c19729de860f1",
            "createdAt": "2024-01-01T00:00:00Z",
            "updatedAt": "2024-01-01T00:00:00Z"
        },
        {
            "id": "507f191e810c19729de860ea9",
            "title": "NoSQL ve SQL Karşılaştırması",
            "content": "Farklı veritabanı modellerinin avantajları ve dezavantajları nelerdir...",
            "author": "507f191e810c19729de860f2",
            "createdAt": "2023-12-31T00:00:00Z",
            "updatedAt": "2023-12-31T00:00:00Z"
        },
        {
            "id": "507f191e810c19729de860ea10",
            "title": "Agile ve Scrum ile Yazılım Geliştirme Süreçleri",
            "content": "Agile yazılım geliştirme prensipleri ve Scrum çerçevesinin temelleri...",
            "author": "507f191e810c19729de860f3",
            "createdAt": "2023-12-30T00:00:00Z",
            "updatedAt": "2023-12-30T00:00:00Z"
        }
    ]
    return (
        <div>
            <Navbar></Navbar>
            <section class="bg-white dark:bg-gray-900 pt-20">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-m text-center lg:mb-16 mb-8">
                        <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Üret ve Paylaş.</h2>
                        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">CASVAL bünyesinde içerik üretmekten keyif alan üyelerimizin hazırladığı bilgi arşivi.</p>
                    </div>
                    <div class="grid gap-8 lg:grid-cols-2">
                        {posts.map((post, index) => (
                            <BlogCard key={index} data={post} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer></Footer>

        </div>
    )
}
