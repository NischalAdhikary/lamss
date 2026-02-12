export default function WorkingProcess() {
    const processes = [
        {
            number: 1,
            title: "Consultation",
            description: "We begin by understanding your specific requirements, including service type, languages, subject matter, and deadlines, to ensure clarity from the start."
        },
        {
            number: 2,
            title: "Professional Assignment",
            description: "Projects are assigned to experienced translators, interpreters, or transcriptionists who meet LAMSS' standards of quality and reliability."
        },
        {
            number: 3,
            title: "Quality Assurance",
            description: "Every task undergoes thorough review and editing. For international assignments, only qualified professionals with prior experience are assigned to ensure excellence."
        },
        {
            number: 4,
            title: "Delivery & Feedback",
            description: "Work is delivered within the agreed timeline, with open communication for feedback and any clarifications. We make sure clients are fully satisfied."
        },
        {
            number: 5,
            title: "Training & Development",
            description: "We mentor and train new interpreters and translators, sharing knowledge to strengthen the language services sector across Nepal."
        }
    ];

    return (
        <div className="w-full relative py-8 md:flex-row flex-col md:py-16 flex gap-10">

            <div className="w-full md:w-1/2 space-y-6">
                <div>
                    <p className="text-lg font-medium text-(--primary-bg) mb-2">Our Working Process</p>
                    <h3 className="text-xl md:text-3xl font-bold">
                        Our procedures are simple, seamless, and streamlined.
                    </h3>
                </div>

                <div className="space-y-5">
                    {processes.map((process) => (
                        <div key={process.number} className="flex gap-4">
                            <div className="shrink-0">
                                <div className="w-10 h-10 rounded-full bg-(--primary-bg) text-white flex items-center justify-center font-bold">
                                    {process.number}
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">{process.title}</h4>
                                <p className="text-gray-700 dark:text-white text-md leading-7">{process.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full md:w-1/2 self-center rounded overflow-hidden">
                <img src="/lamss1.png" className="h-80 md:h-120 w-full object-cover transition duration-150 ease-in hover:scale-110" alt="working_process" />
            </div>
        </div>
    );
}