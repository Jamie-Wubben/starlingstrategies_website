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
        <div className="min-h-screen py-20 px-4 max-w-7xl mx-auto space-y-24">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Services
            </h1>

            {/* Pillar 1: Business Automation */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-2 text-primary">{t('business.title')}</h2>
                        <h3 className="text-xl font-medium text-gray-300 mb-4">{t('business.headline')}</h3>
                        <p className="text-gray-400 leading-relaxed">{t('business.intro')}</p>
                    </div>

                    <ul className="space-y-6">
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

                    <div className="pt-6 border-t border-gray-800">
                        <p className="text-gray-400">
                            {t('business.projectsRef')} <Link href={`/${locale}/projects`} className="text-primary hover:underline font-medium">Ayuda Vets</Link>.
                        </p>
                    </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center">
                    <div className="w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-gray-800 flex items-center justify-center">
                        <svg className="w-32 h-32 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                </div>
            </div>

            {/* Pillar 2: R&D */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                    <div className="w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-secondary/20 to-transparent border border-gray-800 flex items-center justify-center">
                        <svg className="w-32 h-32 text-secondary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                    </div>
                </div>

                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-2 text-secondary">{t('tech.title')}</h2>
                        <h3 className="text-xl font-medium text-gray-300 mb-4">{t('tech.headline')}</h3>
                        <p className="text-gray-400 leading-relaxed">{t('tech.intro')}</p>
                    </div>

                    <ul className="space-y-6">
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

                    <div className="pt-6 border-t border-gray-800">
                        <p className="text-gray-400">
                            {t('tech.academicRef')} <a href="https://scholar.google.com/citations?user=B713PYwAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline font-medium">Google Scholar</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
