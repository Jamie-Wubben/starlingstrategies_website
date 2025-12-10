import { useTranslations } from 'next-intl';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-gray-800 py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-400 text-sm">
                    &copy; {currentYear} Starling Strategies.
                </div>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="https://www.linkedin.com/in/jamie-wubben/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                        LinkedIn
                    </a>
                    <a href="https://scholar.google.com/citations?user=B713PYwAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                        Google Scholar
                    </a>
                </div>
            </div>
        </footer>
    );
}
