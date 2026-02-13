import RouteHero from '@/components/layout/HeroPage'
import { services } from '@/data/services'
import { useParams, Link } from 'react-router-dom'
import { CheckCircle, Globe, Award, FileText } from 'lucide-react'
import SEO from '@/components/layout/Seo'

export default function ServiceDetail() {
    const { slug } = useParams()
    const service = services.find(s => s.slug === slug)

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
                    <Link
                        to="/services"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                        ← Back to Services
                    </Link>
                </div>
            </div>
        )
    }

    const data = {
        title: service.title,
        image: service.image,
        route: true
    }

    return (
        <>
            <SEO
                title={`${service.title} - LAMSS Services`}
                description={service.shortDescription || service.fullDescription.slice(0, 150)}
                keywords={`LAMSS, ${service.title}, translation, interpretation, subtitling`}
                image={service.image || '/lamss1.png'}

            />

            <RouteHero data={data} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                <div className="mb-16">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl text-gray-600 dark:text-white leading-relaxed">
                            {service.fullDescription}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">

                        {service.languages && (
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <Globe className="w-6 h-6  text-blue-600" />
                                    <h2 className="text-2xl font-bold dark:text-white text-gray-900">Languages Supported</h2>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {service.languages.map((lang, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium"
                                        >
                                            {lang}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}


                        {service.features && (
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <Award className="w-6 h-6 text-blue-600" />
                                    <h2 className="text-2xl font-bold dark:text-white text-gray-900">Key Features</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                                            <span className="text-gray-700 dark:text-white">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}


                        {service.pricing && (
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <FileText className="w-6 h-6 text-blue-600" />
                                    <h2 className="text-2xl font-bold text-gray-900">Pricing</h2>
                                </div>
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-gray-700 dark:text-white mb-4 font-medium">{service.pricing.standard}</p>
                                    {service.pricing.note && (
                                        <p className="text-gray-600 text-sm italic border-l-4 border-blue-600 pl-4">
                                            {service.pricing.note}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}


                        {service.process && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How It Works</h2>
                                <div className="space-y-6">
                                    {service.process.map((step, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="shrink-0">
                                                <div className="w-10 h-10 rounded-full bg-blue-600 text-white dark:text-white flex items-center justify-center font-bold">
                                                    {index + 1}
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg dark:text-white text-gray-900 mb-2">{step.title}</h3>
                                                <p className="text-gray-600 dark:text-white">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}


                        {service.specialNotes && (
                            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                                <h3 className="font-semibold text-lg text-amber-900 mb-2">Important Notes</h3>
                                <ul className="space-y-2">
                                    {service.specialNotes.map((note, index) => (
                                        <li key={index} className="text-amber-800 flex items-start gap-2">
                                            <span className="text-amber-600 mt-1">•</span>
                                            <span>{note}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>


                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">


                            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
                                <h3 className="font-bold text-xl mb-3">Ready to Get Started?</h3>
                                <p className="text-blue-100 mb-6 text-sm">
                                    Get a free quote or discuss your project requirements with our team.
                                </p>
                                <div className="space-y-3">
                                    <Link
                                        to="/contactus"
                                        className="block w-full bg-white text-blue-600 text-center py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                                    >
                                        Contact Us
                                    </Link>
                                    <a
                                        href="tel:+977981464166"
                                        className="block w-full bg-blue-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                                    >
                                        Call Us Now
                                    </a>
                                </div>
                            </div>


                            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <Award className="w-6 h-6 text-green-600" />
                                    <h3 className="font-bold text-lg text-gray-900">Quality Guaranteed</h3>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>5+ years experience minimum</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>Rigorous background checks</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>Proven track record</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Services Section */}
                {/* <div className="mt-20 border-t border-gray-200 pt-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services
                            .filter(s => s.slug !== slug)
                            .slice(0, 3)
                            .map((otherService) => (
                                <Link
                                    key={otherService.slug}
                                    to={`/services/${otherService.slug}`}
                                    className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:border-blue-300"
                                >
                                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {otherService.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {otherService.shortDescription}
                                    </p>
                                    <span className="text-blue-600 text-sm font-medium group-hover:underline">
                                        Learn more →
                                    </span>
                                </Link>
                            ))}
                    </div>
                </div> */}

                {/* Final CTA */}
                <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Want to Learn More About Our Services?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Explore all our services or get in touch with our team to discuss your specific requirements
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/services"
                            className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            View All Services
                        </Link>
                        <Link
                            to="/contactus"
                            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}