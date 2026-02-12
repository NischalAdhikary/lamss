import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/aboutus" },
    { name: "Services", href: "/services" },
    {
        name: "Blogs",
        href: "/blogs"
    },
    { name: "Contact", href: "/contactus" },
];

export default function Navbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [fixNavbar, setNavbar] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    useEffect(() => {
        // Check for saved theme preference or default to light mode
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };

        const handleNavbar = () => {
            if (window.scrollY > 300) {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        };

        document.body.style.overflow = isMenuOpen ? "hidden" : "unset";

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleNavbar);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleNavbar);
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    return (
        <nav
            className={`
        z-50
        ${fixNavbar
                    ? isMenuOpen
                        ? "fixed top-0 left-0 bg-opacity-90 backdrop-blur-sm h-screen md:h-[120px] bg-black/50"
                        : "fixed top-0 left-0 bg-opacity-90 backdrop-blur-sm h-[90px] md:h-[120px] bg-black/50"
                    : "absolute h-[130px] md:h-[160px]"
                }
        w-full text-white py-4 px-4 md:px-8 flex justify-between items-center transition-all duration-300 ease-in-out
      `}
        >
            <div className="w-full h-full container mx-auto max-w-8xl flex items-center justify-between">

                <div className="h-full relative w-[110px] md:w-[140px] cursor-pointer">
                    <img
                        src="/lamss.png"
                        alt="logo"
                        className="w-full h-full object-contain"
                        onClick={() => navigate('/')}
                    />
                </div>

                <div className="lg:hidden flex items-center gap-3">
                    {/* Dark Mode Toggle - Mobile */}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
                        aria-label="Toggle dark mode"
                    >
                        {isDarkMode ? (
                            <Sun size={20} className="text-yellow-400" />
                        ) : (
                            <Moon size={20} className="text-gray-300" />
                        )}
                    </button>

                    <button onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <X size={30} className="text-white cursor-pointer" />
                        ) : (
                            <Menu size={30} className="text-white cursor-pointer" />
                        )}
                    </button>
                </div>

                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-95 z-[9998] lg:hidden"
                        onClick={toggleMenu}
                    />
                )}

                <ul
                    className={`
            ${isMenuOpen
                            ? "fixed left-0 right-0 top-0 h-full w-full bg-black bg-opacity-95 pt-20 px-6 z-[9999] shadow-lg transition-transform duration-300 flex flex-col items-center justify-center"
                            : "hidden"
                        }
            lg:flex lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:p-0 lg:shadow-none lg:gap-8 lg:items-center
          `}
                >
                    {isMenuOpen && (
                        <button
                            onClick={toggleMenu}
                            className="absolute top-4 right-4 z-[10000]"
                        >
                            <X size={30} className="text-white cursor-pointer" />
                        </button>
                    )}

                    {navigationLinks.map((item) => (
                        <li key={item.name} className="my-4 lg:my-0">
                            <NavLink
                                to={item.href}
                                className={({ isActive }) =>
                                    twMerge(
                                        "font-medium text-lg md:text-xl text-white transition-colors duration-300 block",
                                        isActive ? "text-yellow-400" : "hover:text-yellow-400"
                                    )
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}

                    {/* Dark Mode Toggle - Desktop */}
                    <li className="my-4 lg:my-0">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? (
                                <Sun size={22} className="text-yellow-400" />
                            ) : (
                                <Moon size={22} className="text-gray-300" />
                            )}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}