
export default function Mission() {
    return (
        <div className="w-full relative py-8 md:py-16 flex md:flex-row flex-col gap-10">
            <div className="w-full md:w-1/2 self-center rounded overflow-hidden ">
                <img src="/lamss1.png" className="h-80 md:h-120 w-full object-cover transition duration-150 ease-in hover:scale-110" alt="mission_vission" />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
                <div>
                    <p className="text-lg font-medium text-(--primary-bg) mb-2">Our Mission & Vission</p>

                    <h3 className=" text-xl dark:text-white md:text-3xl font-bold">
                        Connecting people, empowering professionals, and building a future where language bridges gaps
                    </h3>

                </div>

                <p className="text-gray-700 dark:text-white text-md leading-7">LAMSS is committed to delivering high-quality, ethical, and affordable language services that connect service seekers directly with professional translators and interpreters. We focus on empowering skilled language professionals, training young translators and interpreters, and standardizing best practices to ensure consistency, reliability, and fairness in every assignment. By promoting translation and interpretation as a full-time profession, we aim to raise both the quality and accessibility of language services across Nepal.</p>
                <p className="text-gray-700 dark:text-white text-md leading-7">We envision a Nepal where language is a bridge, not a barrier. Our goal is to ensure effective communication at national, provincial, and local levels, supporting government bodies, NGOs, and organizations in a multilingual society. By strengthening the language services sector and expanding access to skilled professionals, LAMSS strives to make every message understood accurately and every voice heard, ultimately contributing to a more inclusive, connected, and informed society.</p>
            </div>


        </div>
    )
}
