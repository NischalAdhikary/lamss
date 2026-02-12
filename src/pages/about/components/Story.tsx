
export default function Story() {
    return (
        <div className='w-full flex md:flex-row flex-col gap-6 md:gap-10'>
            <div className="w-full md:w-1/2 space-y-5 md:space-y-8">
                <div>
                    <p className="text-lg font-medium text-(--primary-bg) mb-2">The Story Behind LAMSS
                    </p>
                    <h3 className=" text-2xl md:text-4xl font-bold">Built on experience. Driven by quality.</h3>

                </div>

                <p className="text-gray-700 dark:text-white leading-7">
                    <span className="text-(--primary-bg) font-semibold"> Language and Media Support Services (LAMSS)</span>  was established in 2018 with a clear purpose: to bridge the growing gap between service seekers and genuine language service providers in Nepal. At a time when many intermediaries entered the market without real expertise, clients were forced to pay higher costs while compromising on quality, and skilled translators and interpreters were undervalued for their demanding and specialized work.
                </p>
                <p className="text-gray-700 dark:text-white leading-7">
                    Recognizing this imbalance, three experienced professional translators and interpreters came together to create LAMSS. Their goal was simple yet powerful — to directly connect clients with qualified language professionals, ensuring fair pricing, ethical practices, and consistently high-quality services.
                </p>
                <p className="text-gray-700 dark:text-white leading-7">
                    Since its inception, LAMSS has grown into a trusted, government-registered organization delivering translation, interpretation, transcription, and media support services to national and international clients, including UN agencies, INGOs, government bodies, and academic institutions.
                </p>

            </div>
            <div className="w-full md:w-1/2 flex flex-col">

                <div className="grid gird-cols-1 md:grid-cols-2 md:grid-rows-2 -gap-6 h-full w-full">

                    <div className="md:block hidden"></div>


                    <img
                        src="/lamss1.png"
                        alt="LAMSS"
                        className="w-full h-full object-cover rounded-2xl shadow-md"
                    />


                    <img
                        src="/lamss1.png"
                        alt="LAMSS"
                        className="w-full md:block hidden h-full object-cover rounded-2xl shadow-md"
                    />


                    <div className="md:block hidden"></div>
                </div>


            </div>

        </div>
    )
}
