
import { blogs } from '@/data/blogs'
import { Link } from 'react-router-dom'

export default function Bloghero() {

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }


    const getPreviewText = (htmlContent: string | null | undefined): string => {
        if (!htmlContent) return ''

        const text = htmlContent
            .replace(/<[^>]*>/g, ' ')
            .replace(/\s+/g, ' ')
            .trim()

        return text.length > 180 ? text.substring(0, 180) + '...' : text
    }


    return (
        <section className="relative py-20 px-6  overflow-hidden">

            <div className="absolute top-0 right-0 w-96 h-96 bg-(--primary-bg) opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-(--secondary-bg) opacity-5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative">

                <div className="text-center mb-16">
                    <div className="inline-block">
                        <span className="text-sm font-semibold uppercase tracking-wider text-(--secondary-bg) bg-(--secondary-bg)/10 px-4 py-2 rounded-full">
                            Latest Insights
                        </span>
                    </div>
                    <h2 className="mt-6 text-4xl dark:text-white md:text-5xl font-bold text-slate-900">
                        Discover Our <span className="text-(--secondary-bg)">Stories</span>
                    </h2>
                    <p className="mt-4 dark:text-white text-slate-600 max-w-2xl mx-auto">
                        Explore our latest articles on language services, professional standards, and bridging communication gaps in Nepal.
                    </p>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {blogs.map((blog, index) => (
                        <article
                            key={blog.id}
                            className="group relative dark:bg-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >

                            <div className="relative h-64 overflow-hidden bg-slate-200">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />



                                <div className="absolute top-4 left-4 bg-(--primary-bg) text---secondary-bg) px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
                                    {formatDate(blog.createdAt)}
                                </div>
                            </div>


                            <div className="p-8">

                                <p className="text-xs uppercase tracking-wider text-(--secondary-bg) font-semibold mb-3">
                                    By {blog.author}
                                </p>


                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-(--secondary-bg) transition-colors duration-300">
                                    <a href={`/blog/${blog.slug}`} className="hover:underline">
                                        {blog.title}
                                    </a>
                                </h3>


                                <p className="text-slate-600 leading-relaxed mb-6">
                                    {getPreviewText(blog.description)}
                                </p>

                                <Link
                                    to={`/blog/${blog.slug}`}
                                    className="inline-flex items-center gap-2 text-(--secondary-bg) font-semibold hover:gap-3 transition-all duration-300 group/link"
                                >
                                    Read Full Article
                                    <svg
                                        className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>


                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}