
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contactinfoup() {
    const address = "Kathmandu, Nepal";
    const email = "admin@lamss.org";
    const contactNumber = "+977981464166";

    return (
        <div className="flex flex-col gap-6 text-black">
            <h3 className="text-lg text-(--secondary-bg) font-semibold">
                Contact Us
            </h3>

            <h1 className="text-4xl dark:text-white font-bold">
                Let's Get <span className="text-(--primary-bg)">Connected</span> Together
            </h1>

            <div className="flex gap-3 dark:text-white items-center">
                <MapPin size={20} className="text-[#005b86]" />
                <p className="text-lg">{address}</p>
            </div>

            <div className="flex gap-3 dark:text-white items-center">
                <Mail size={20} className="text-[#005b86]" />
                <a
                    href={`mailto:${email}`}
                    className="text-lg  hover:text-(--secondary-bg) transition"
                >
                    {email}
                </a>
            </div>


            <div className="flex gap-3 dark:text-white items-center">
                <Phone size={20} className="text-[#005b86]" />
                <a
                    href={`tel:${contactNumber}`}
                    className="text-lg hover:text-(--secondary-bg) transition"
                >
                    {contactNumber}
                </a>
            </div>
        </div>
    );
}
