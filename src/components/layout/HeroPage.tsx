import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { ChevronRight } from "lucide-react";

export default function RouteHero({ data }: { data: { image?: string; title: string; route?: boolean } }) {
    const location = useLocation();

    const paths = location.pathname.split("/").filter(Boolean).map(decodeURIComponent);
    console.log(paths)
    const breadcrumbs = [
        { label: "Home", path: "/" },
        ...paths.map((path, index) => ({
            label: path
                .split("-")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" "),
            path: `/${paths.slice(0, index + 1).join("/")}`,
        })),
    ];

    return (
        <div className="w-full relative h-100 md:h-130">
            <img
                className="absolute inset-0 h-full w-full object-cover object-center"
                src={data.image ?? ""}
                alt="Hero image"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <Navbar />
            <div className="absolute container mx-auto inset-0 flex flex-col gap-3 z-20 justify-center items-center px-4">
                <h1 className="text-2xl capitalize text-yellow-300 md:text-5xl font-bold font-sweet lg:text-5xl text-center">
                    {data.title}
                </h1>

                {data.route && (
                    <div className="flex items-center flex-wrap justify-center gap-1 md:gap-2 text-white text-sm md:text-base mt-2 md:mt-6">
                        {breadcrumbs.map((item, index) => (
                            <div key={index} className="flex items-center">
                                <Link
                                    to={item.path}
                                    className="hover:text-yellow-300 capitalize transition-colors px-1"
                                >
                                    {item.label}
                                </Link>
                                {index !== breadcrumbs.length - 1 && (
                                    <ChevronRight className="h-3 w-3 md:h-4 md:w-4 text-white mx-1" />
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}