// import { Mail, Phone } from "lucide-react"
// import { Button } from "../ui/button"

// const NavLinks = [{
//     label: "Home",
//     value: "/"
// }, {
//     label: "About Us",
//     value: "aboutus"
// },
// {
//     label: "Services",
//     value: "services",
// },
// {
//     label: "Contact Us",
//     value: "contactus"
// }]

// export default function Footer() {
//     return (
//         <div className="w-full relative h-auto min-h-[600px] md:h-[600px] flex bg-(--secondary-bg) flex-col">

//             <div className="flex-1 pb-8 md:pb-0">
//                 <div className="mx-auto container max-w-5xl flex flex-col mt-12 md:mt-20 gap-6 px-4">
//                     <h1 className="text-center text-white text-2xl md:text-4xl lg:text-5xl">
//                         Clear <span className="text-(--primary-bg) font-bold">Communication</span> Starts Here.
//                     </h1>
//                     <Button className="self-center">Contact Us</Button>
//                 </div>
//             </div>

//             <div className="flex-1 relative min-h-[400px]">
//                 <div className="absolute inset-0 -bottom-10 w-full">
//                     <img
//                         src="/ftpattern.svg"
//                         className="w-full h-full object-cover object-bottom"
//                         alt=""
//                     />
//                 </div>

//                 <div className="absolute -bottom-10 w-full h-auto md:h-50">
//                     <div className="container mx-auto max-w-7xl grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-6">


//                         <div className="border-r-0 md:border-r border-b md:border-b-0 pb-6 md:pb-0 flex justify-center md:justify-start items-center">
//                             <img
//                                 src="/lamss.png"
//                                 alt="lamss_logo"
//                                 className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 object-contain"
//                             />
//                         </div>


//                         <div className="space-y-4 border-r-0 lg:border-r border-b md:border-b-0 pb-6 md:pb-0">
//                             <h3 className="text-lg md:text-xl font-semibold">Quick Links</h3>
//                             <ul className="space-y-2">
//                                 {NavLinks.map((d) =>
//                                     <li
//                                         key={d.value}
//                                         className="hover:text-(--primary-bg) transition-colors cursor-pointer"
//                                     >
//                                         {d.label}
//                                     </li>
//                                 )}
//                             </ul>
//                         </div>


//                         <div className="space-y-4 pb-6 md:pb-0">
//                             <h3 className="text-lg md:text-xl font-semibold">Contact Links</h3>
//                             <ul className="flex flex-col gap-3">
//                                 <li className="flex gap-2 items-center">
//                                     <Mail size={18} className="shrink-0" />
//                                     <a
//                                         href="mailto:abc@gmail.com"
//                                         className="hover:text-(--primary-bg) transition-colors break-all"
//                                     >
//                                         abc@gmail.com
//                                     </a>
//                                 </li>
//                                 <li className="flex gap-2 items-center">
//                                     <Phone size={18} className="shrink-0" />
//                                     <a
//                                         href="tel:9800000000"
//                                         className="hover:text-(--primary-bg) transition-colors"
//                                     >
//                                         9800000000
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }
import { Mail, Phone } from "lucide-react"

import { Link, useNavigate } from "react-router-dom"
import { Button } from "../ui/button"


const NavLinks = [
    { label: "Home", value: "/" },
    { label: "About Us", value: "aboutus" },
    { label: "Services", value: "services" },
    { label: "Contact Us", value: "contactus" }
]

export default function Footer() {
    const navigate = useNavigate()
    return (
        <footer className="relative bg-(--secondary-bg) dark:bg-background text-white overflow-hidden">

            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-(--primary-bg) rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-(--primary-bg) rounded-full blur-3xl"></div>
            </div>


            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-(--primary-bg) to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

                    <div className="md:col-span-5 space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                                Clear Communication<br />
                                <span className="text-(--primary-bg)">Starts Here.</span>
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed max-w-md">
                                Elevating conversations through thoughtful design and seamless connectivity.
                                Your trusted partner in modern communication solutions.
                            </p>
                        </div>
                        <Button
                            onClick={() => navigate('/contactus')}
                            className="group bg-(--primary-bg) hover:bg-(--primary-bg)/90 text-(--secondary-bg) font-semibold px-8 py-6 rounded-lg shadow-lg shadow-(--primary-bg)/20 transition-all duration-300 hover:shadow-xl hover:shadow-(--primary-bg)/30 hover:scale-105"
                        >
                            Contact Us
                            <svg
                                className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Button>


                    </div>


                    <div className="md:col-span-3 md:col-start-7">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-(--primary-bg) mb-6">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {NavLinks.map((d, index) => (
                                <li key={index} className="group">
                                    <Link
                                        to={d.value}
                                        className="inline-flex items-center text-white/80 hover:text-(--primary-bg) transition-all duration-200 ease-out"
                                    >
                                        <span className="w-0 h-px bg-(--primary-bg) group-hover:w-6 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                                        <span className="relative">
                                            {d.label}
                                            <span className="absolute bottom-0 left-0 w-0 h-px bg-(--primary-bg) group-hover:w-full transition-all duration-300"></span>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div className="md:col-span-4 md:col-start-10">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-(--primary-bg) mb-6">
                            Contact Links
                        </h3>
                        <ul className="space-y-4">
                            <li className="group">
                                <a
                                    href="mailto:admin@lamss.org"
                                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200"
                                >
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 group-hover:bg-(--primary-bg) border border-white/20 group-hover:border-(--primary-bg) transition-all duration-300 group-hover:scale-110">
                                        <Mail className="w-4 h-4 group-hover:text-(--secondary-bg)" />
                                    </div>
                                    <span className="text-sm">admin@lamss.org</span>
                                </a>
                            </li>
                            <li className="group">
                                <a
                                    href="tel:+977981464166"
                                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200"
                                >
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 group-hover:bg-(--primary-bg) border border-white/20 group-hover:border-(--primary-bg) transition-all duration-300 group-hover:scale-110">
                                        <Phone className="w-4 h-4 group-hover:text-(--secondary-bg)" />
                                    </div>
                                    <span className="text-sm">+977-981464166</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
                        <p>© {new Date().getFullYear()} <span className="text-(--primary-bg)">LAMSS</span>. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-(--primary-bg) transition-colors duration-200">Privacy Policy</a>
                            <a href="#" className="hover:text-(--primary-bg) transition-colors duration-200">Terms of Service</a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}