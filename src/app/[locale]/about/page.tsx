import { getTranslations } from 'next-intl/server';

export default async function AboutPage() {
    const t = await getTranslations('AboutPage');

    return (
        <div className="min-h-screen py-20 px-4 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Profile Section */}
                <div className="order-2 md:order-1 space-y-8">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-8">
                        {t('title')}
                    </h1>

                    <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                        <p>{t('bio.p1')}</p>
                        <p>{t('bio.p2')}</p>
                        <p>{t('bio.p3')}</p>
                    </div>

                    <div className="pt-8 border-t border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4">Key Competencies</h3>
                        <div className="grid gap-4">
                            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                                <h4 className="font-semibold text-primary mb-2">Technical</h4>
                                <p className="text-sm text-gray-400">{t('skills.technical')}</p>
                            </div>
                            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                                <h4 className="font-semibold text-secondary mb-2">Strategic</h4>
                                <p className="text-sm text-gray-400">{t('skills.strategic')}</p>
                            </div>
                            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                                <h4 className="font-semibold text-white mb-2">Languages</h4>
                                <p className="text-sm text-gray-400">{t('skills.languages')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image/Visual Section */}
                <div className="order-1 md:order-2 flex justify-center">
                    <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl shadow-primary/20">
                        {/* Placeholder for Headshot */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                            <span className="text-gray-600 font-mono text-sm">Headshot Placeholder</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
