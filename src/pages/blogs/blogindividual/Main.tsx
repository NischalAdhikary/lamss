
import RouteHero from '@/components/layout/HeroPage'
import SEO from '@/components/layout/Seo'
import { blogs } from '@/data/blogs'
import { useParams, NavLink, Link } from 'react-router-dom'

export default function IndividualMain() {
    const { slug } = useParams()


    const blog = blogs.find(b => b.slug === slug)


    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Blog Not Found</h1>
                    <NavLink to="/blogs" className="text-(--secondary-bg) hover:underline">
                        ← Back to Blogs
                    </NavLink>
                </div>
            </div>
        )
    }

    const data = {
        title: blog.title,
        image: blog.image,
        route: true
    }


    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    return (
        <>
            <SEO
                title={`${blog.title} - LAMSS Blog`}
                description={blog.description.slice(0, 150)}
                keywords={`LAMSS, blog, translation, interpretation, subtitling, ${blog.author}`}
                image={blog.image || '/lamss1.png'}
            />
            <RouteHero data={data} />


            <div className="relative  py-16">
                <div className="max-w-4xl mx-auto px-6">

                    <div className="absolute top-0 right-0 w-96 h-96 bg-(--primary-bg) opacity-5 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-(--secondary-bg) opacity-5 rounded-full blur-3xl -z-10"></div>


                    <div className="mb-8 flex  flex-wrap items-center gap-4 text-sm">
                        <span className="bg-(--primary-bg) text-(--secondary-bg) px-4 py-2 rounded-lg font-semibold">
                            {formatDate(blog.createdAt)}
                        </span>
                        <span className="text-slate-600">
                            By <span className="text-r(--secondary-bg) font-semibold">{blog.author}</span>
                        </span>
                    </div>
                    <div className="bg-white  dark:bg-card rounded-2xl shadow-xl p-8 md:p-12 relative">


                        <div
                            className="prose prose-lg max-w-none blog-content"
                            dangerouslySetInnerHTML={{ __html: blog.description }}
                        />
                    </div>





                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-4">
                            Want to Learn More?
                        </h3>
                        <p className="text-slate-600 dark:text-white mb-6">
                            Explore more articles or get in touch with our team
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/blogs"
                                className="px-8 py-3 bg-white border-2 border-(--secondary-bg) text-(--secondary-bg) font-semibold rounded-lg hover:bg-(--secondary-bg) hover:text-white transition-all duration-300"
                            >
                                View All Articles
                            </Link>
                            <Link
                                to="/contactus"
                                className="px-8 py-3 bg-(--primary-bg) text-(--secondary-bg) font-semibold rounded-lg hover:bg-(--primary-bg)/90 transition-all duration-300 shadow-lg shadow-(--primary-bg)/20"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}