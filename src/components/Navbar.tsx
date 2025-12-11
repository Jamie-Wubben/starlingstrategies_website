'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
    const t = useTranslations('Navigation');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'nl', label: 'NL' },
        { code: 'es', label: 'ES' }
    ];

    const navItems = [
        { href: `/${locale}/services`, label: t('services') },
        { href: `/${locale}/projects`, label: t('projects') },
        { href: `/${locale}/about`, label: t('about') },
        { href: `/${locale}/contact`, label: t('contact') }
    ];

    const switchLocale = (newLocale: string) => {
        const path = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(path);
        setIsLanguageOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsLanguageOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <nav className="fixed top-0 w-full z-50 glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href={`/${locale}`} className="text-xl font-bold text-primary">
                            Starling Strategies
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Language Selector & Mobile Menu Button */}
                    <div className="flex items-center space-x-4">
                        {/* Language Selector */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                                className="flex items-center justify-between w-20 bg-gray-900 text-white border border-gray-700 hover:border-secondary rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-secondary transition-all"
                            >
                                <span>{locale.toUpperCase()}</span>
                                <svg className={`h-4 w-4 text-gray-400 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>

                            {isLanguageOpen && (
                                <div className="absolute right-0 mt-2 w-20 bg-gray-900 border border-gray-700 rounded-lg shadow-xl overflow-hidden z-50">
                                    {languages
                                        .filter(lang => lang.code !== locale)
                                        .map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => switchLocale(lang.code)}
                                                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-secondary/10 hover:text-secondary transition-colors"
                                            >
                                                {lang.label}
                                            </button>
                                        ))}
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary transition-colors"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger Icon */}
                            {!isMobileMenuOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-[60] md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Slide-in Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-gray-900 border-l border-gray-700 shadow-2xl transform transition-transform duration-300 ease-in-out z-[70] md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
                    }`}
            >
                <div className="flex flex-col h-full bg-gray-900">
                    {/* Close Button */}
                    <div className="flex justify-end p-4 bg-gray-900">
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary transition-colors"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="flex-1 px-4 py-6 space-y-4 bg-gray-900">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
