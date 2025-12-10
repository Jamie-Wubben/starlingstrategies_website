'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
    const t = useTranslations('HomePage');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'nl', label: 'NL' },
        { code: 'es', label: 'ES' }
    ];

    const switchLocale = (newLocale: string) => {
        const path = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(path);
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <nav className="fixed top-0 w-full z-50 glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href={`/${locale}`} className="text-xl font-bold text-primary">
                            Starling Strategies
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href={`/${locale}/services`} className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Services
                            </Link>
                            <Link href={`/${locale}/projects`} className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Projects
                            </Link>
                            <Link href={`/${locale}/about`} className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                About
                            </Link>
                            <Link href={`/${locale}/contact`} className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center justify-between w-20 bg-gray-900 text-white border border-gray-700 hover:border-secondary rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-secondary transition-all"
                            >
                                <span>{locale.toUpperCase()}</span>
                                <svg className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>

                            {isOpen && (
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
                    </div>
                </div>
            </div>
        </nav>
    );
}
