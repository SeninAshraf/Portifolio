import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#" className="font-display font-bold text-2xl flex items-center gap-1">
                    senin<span className="text-primary">.</span>ashraf
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#work">Work</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#updates">Updates</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
                </div>

                <a href="#contact" className="hidden md:inline-flex btn btn-primary py-2 px-5 text-sm">
                    Let's Talk
                </a>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
                    <MobileNavLink onClick={() => setIsOpen(false)} href="#about">About</MobileNavLink>
                    <MobileNavLink onClick={() => setIsOpen(false)} href="#work">Work</MobileNavLink>
                    <MobileNavLink onClick={() => setIsOpen(false)} href="#skills">Skills</MobileNavLink>
                    <MobileNavLink onClick={() => setIsOpen(false)} href="#updates">Updates</MobileNavLink>
                    <MobileNavLink onClick={() => setIsOpen(false)} href="#contact">Contact</MobileNavLink>
                </div>
            )}
        </nav>
    );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} className="text-gray-400 hover:text-white transition-colors relative group font-medium">
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
    </a>
);

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
    <a
        href={href}
        onClick={onClick}
        className="text-lg font-medium text-gray-400 hover:text-white"
    >
        {children}
    </a>
);
