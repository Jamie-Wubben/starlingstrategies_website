import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function ServicesPage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const t = await getTranslations('ServicesPage');
    const { locale } = await params;

    return (
        <div className="min-h-screen py-20 px-4 max-w-5xl mx-auto space-y-24">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Services
            </h1>

            {/* Pillar 1: Website Development */}
            <div id="website-development" className="group relative p-8 md:p-12 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-[#f97316]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#f97316]/10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="absolute top-8 right-8 text-[#f97316]/50">
                    <svg className="w-16 h-16 md:w-24 md:h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" x2="22" y1="12" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-3xl font-bold mb-2 text-[#f97316]">{t('website.title')}</h2>
                    <h3 className="text-xl font-medium text-gray-300 mb-4">{t('website.headline')}</h3>
                    <p className="text-gray-400 leading-relaxed mb-8">{t('website.intro')}</p>

                    <ul className="space-y-6 mb-8">
                        <li className="flex gap-4">
                            <div className="mt-1 w-2 h-2 rounded-full bg-[#f97316] flex-shrink-0"></div>
                            <div>
                                <h4 className="font-bold text-white">{t('website.list.item1.title')}</h4>
                                <p className="text-sm text-gray-400">{t('website.list.item1.desc')}</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="mt-1 w-2 h-2 rounded-full bg-[#f97316] flex-shrink-0"></div>
                            <div>
                                <h4 className="font-bold text-white">{t('website.list.item2.title')}</h4>
                                <p className="text-sm text-gray-400">{t('website.list.item2.desc')}</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="mt-1 w-2 h-2 rounded-full bg-[#f97316] flex-shrink-0"></div>
                            <div>
                                <h4 className="font-bold text-white">{t('website.list.item3.title')}</h4>
                                <p className="text-sm text-gray-400">{t('website.list.item3.desc')}</p>
                            </div>
                        </li>
                    </ul>

                    <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center px-6 py-3 border border-[#f97316] text-base font-medium rounded-md text-[#f97316] hover:bg-[#f97316]/10 transition-colors">
                        {t('website.cta')}
                    </Link>
                </div>
            </div>

            <hr className="border-gray-800" />

            {/* Pillar 2: AI & Business Automation */}
            <div id="ai-automation" className="group relative p-8 md:p-12 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="absolute top-8 right-8 text-primary/50">
                    <svg className="w-16 h-16 md:w-24 md:h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>

                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-3xl font-bold mb-2 text-primary">{t('business.title')}</h2>
                    <h3 className="text-xl font-medium text-gray-300 mb-4">{t('business.headline')}</h3>
                    <p className="text-gray-400 leading-relaxed mb-8">{t('business.intro')}</p>

                    <ul className="space-y-6 mb-8">
                        <li className="flex gap-4">
                            <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                            <div>
                                <h4 className="font-bold text-white">{t('business.list.item1.title')}</h4>
                                <p className="text-sm text-gray-400">{t('business.list.item1.desc')}</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                            <div>
                                <h4 className="font-bold text-white">{t('business.list.item2.title')}</h4>
                                <p className="text-sm text-gray-400">{t('business.list.item2.desc')}</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                            <div>
                                <h4 className="font-bold text-white">{t('business.list.item3.title')}</h4>
                                <p className="text-sm text-gray-400">{t('business.list.item3.desc')}</p>
                            </div>
                        </li>
                    </ul>

                    <div className="space-y-6">
                        <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary hover:bg-primary/10 transition-colors">
                            {t('business.cta')}
                        </Link>
                    </div>
                </div>
            </div>

            <hr className="border-gray-800" />

            {/* Pillar 3: R&D Consulting */}
            <div id="rd-consulting" className="group relative p-8 md:p-12 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-secondary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="absolute top-8 right-8 text-secondary/50">
                    <svg className="w-16 h-16 md:w-24 md:h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>

                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-3xl font-bold mb-2 text-secondary">{t('tech.title')}</h2>
                    <h3 className="text-xl font-medium text-gray-300 mb-4">{t('tech.headline')}</h3>
                    <p className="text-gray-400 leading-relaxed mb-8">{t('tech.intro')}</p>

                    <ul className="space-y-6 mb-8">
                        <li className="flex gap-4">
                            <div className="mt-1 w-2 h-2 rounded-full bg-secondary flex-shrink-0"></div>
                            <div>
                                <h4 className="font-bold text-white">{t('tech.list.item1.title')}</h4>
                                <p className="text-sm text-gray-400">{t('tech.list.item1.desc')}</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="mt-1 w-2 h-2 rounded-full bg-secondary flex-shrink-0"></div>
                            <div>
                                <h4 className="font-bold text-white">{t('tech.list.item2.title')}</h4>
                                <p className="text-sm text-gray-400">{t('tech.list.item2.desc')}</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="mt-1 w-2 h-2 rounded-full bg-secondary flex-shrink-0"></div>
                            <div>
                                <h4 className="font-bold text-white">{t('tech.list.item3.title')}</h4>
                                <p className="text-sm text-gray-400">{t('tech.list.item3.desc')}</p>
                            </div>
                        </li>
                    </ul>

                    <div className="space-y-6">
                        <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center px-6 py-3 border border-secondary text-base font-medium rounded-md text-secondary hover:bg-secondary/10 transition-colors">
                            {t('tech.cta')}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
