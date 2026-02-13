
import RouteHero from '@/components/layout/HeroPage'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe, FileText, Mic } from 'lucide-react'
import type { FC } from 'react'
import SEO from '@/components/layout/Seo'
interface Service {
    icon: FC<React.SVGProps<SVGSVGElement>>
    title: string
    description: string
    languages: string[]
    slug: string
    color: 'blue' | 'green' | 'purple' | 'orange'
}
export default function Services() {
    const heroData = {
        title: 'Our Services',
        image: '/lamss1.png',
        route: true
    }

    const services: Service[] = [
        {
            icon: Globe,
            title: 'Translation & Editing',
            description: 'Professional translation services in Nepali, English, and Hindi.',
            languages: ['Nepali', 'English', 'Hindi'],
            slug: 'translation-editing',
            color: 'blue'
        },
        {
            icon: Mic,
            title: 'Interpretation',
            description: 'Simultaneous and consecutive interpretation for all your events.',
            languages: ['Nepali', 'English', 'Hindi', 'Urdu', 'Newari'],
            slug: 'interpretation',
            color: 'green'
        },
        {
            icon: FileText,
            title: 'Transcription & Subtitling',
            description: 'Accurate transcription and professional subtitling services.',
            languages: ['Nepali', 'English'],
            slug: 'transcription-subtitling',
            color: 'purple'
        }
    ]

    return (
        <>
            <SEO
                title="LAMSS Services - Translation, Interpretation & Subtitling"
                description="LAMSS offers professional translation, interpretation, transcription, and subtitling services in Nepali, English, Hindi, and other local languages. We ensure high-quality, reliable language services for individuals, organizations, and development agencies in Nepal."
                keywords="LAMSS, translation services, interpretation, transcription, subtitling, Nepali, English, Hindi, language services, Nepal"
                image="https://via.placeholder.com/1200x630.png?text=LAMSS+Services"
            />
            <RouteHero data={heroData} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">


                <div className="text-center text-black dark:text-white max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold  mb-4">
                        Professional Language & Management Services
                    </h2>
                    <p className="text-lg dark:text-white text-gray-600">
                        We provide comprehensive language solutions with a commitment to quality and excellence.
                        Our experienced team ensures accurate, reliable, and culturally appropriate services.
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        const colorClasses = {
                            blue: 'bg-blue-50 text-blue-600 border-blue-200',
                            green: 'bg-green-50 text-green-600 border-green-200',
                            purple: 'bg-purple-50 text-purple-600 border-purple-200',
                            orange: 'bg-orange-50 text-orange-600 border-orange-200'
                        }

                        return (
                            <div
                                key={index}
                                className="group dark:bg-card dark:border-0 bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                            >
                                <div className={`inline-flex p-3 rounded-xl ${colorClasses[service.color]} mb-6`}>
                                    <Icon className="w-8 h-8" />
                                </div>

                                <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 dark:text-white  mb-4">
                                    {service.description}
                                </p>


                                <div className="mb-6">
                                    <p className="text-sm font-medium dark:text-white text-gray-500 mb-2">Languages:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.languages.map((lang, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                                            >
                                                {lang}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <Link
                                    to={`/services/${service.slug}`}
                                    className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all"
                                >
                                    Learn More <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        )
                    })}
                </div>

                {/* Pricing Section */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12 mb-20">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Transparent Pricing
                        </h2>
                        <div className="bg-white rounded-xl p-8 shadow-sm">
                            <p className="text-lg text-gray-700 mb-4">
                                <span className="font-bold">LAMSS Standard:</span> Based on 350 words per source document
                                as equivalent to one page.
                            </p>
                            <p className="text-gray-600">
                                You pay only for the words you want translated. The word count is usually more in
                                the end product, ensuring you avoid being charged on a physical per-page basis.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quality Assurance */}
                <div className="bg-gray-900 rounded-2xl p-12 text-white">
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Quality Standards</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
                            <p className="text-gray-300">Years minimum experience required</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                            <p className="text-gray-300">Pages translated for reputed agencies</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
                            <p className="text-gray-300">I/NGOs work experience minimum</p>
                        </div>
                    </div>

                    <div className="mt-12 max-w-3xl mx-auto">
                        <h3 className="text-xl font-bold mb-4">Our Commitment to Excellence</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400">✓</span>
                                <span>Rigorous background checks on all interpreters and translators</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400">✓</span>
                                <span>Minimum Bachelor's Degree qualification required</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400">✓</span>
                                <span>International assignment experience for overseas projects</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400">✓</span>
                                <span>Proven track record with development agencies</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contact us today to discuss your project requirements and receive a customized quote
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/contactus"
                            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Request a Quote
                        </Link>
                        <a
                            href="tel:+977981464166"
                            className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                        >
                            Call Us Now
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}