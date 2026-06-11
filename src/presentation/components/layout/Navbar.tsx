import {Home, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "./NavLink";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <span className="font-bold text-xl">Game Store</span>
                    </div>

                    {/* Navegacion escritorio */}
                    <div className="hidden md:flex items-center space-x-4">
                        <NavLink icon={<Home size={18} />} text="Inicio" to="/" active/>
                    </div>

                    {/* Boton menu movil */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-blue-200 focus:outline-none"
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu movil */}
            {isMenuOpen && (
                <div className="md:hidden bg-blue-900">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        
                    </div>
                </div>
            )}
        </nav>
    );
};
