import { getTranslations } from 'next-intl/server';

export default async function ContactPage() {
    const t = await getTranslations('ContactPage');

    return (
        <div className="min-h-screen py-20 px-4 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info & Form */}
                <div className="space-y-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
                            {t('title')}
                        </h1>
                        <p className="text-xl text-gray-300">
                            {t('subtitle')}
                        </p>
                    </div>

                    <form className="space-y-6 bg-gray-900/30 p-8 rounded-2xl border border-gray-800">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">{t('form.name')}</label>
                            <input type="text" id="name" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">{t('form.email')}</label>
                            <input type="email" id="email" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                        </div>

                        <div>
                            <label htmlFor="interest" className="block text-sm font-medium text-gray-400 mb-2">{t('form.interest')}</label>
                            <select id="interest" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors">
                                <option value="automation">{t('form.options.automation')}</option>
                                <option value="uavs">{t('form.options.uavs')}</option>
                            </select>
                        </div>

                        <button type="submit" className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-lg shadow-primary/25">
                            {t('form.submit')}
                        </button>
                    </form>

                    <div className="pt-8 border-t border-gray-800 space-y-4">
                        <div className="flex items-center gap-4 text-gray-300">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <a href={`mailto:${t('email')}`} className="hover:text-white transition-colors">{t('email')}</a>
                        </div>
                        <p className="text-sm text-gray-500 italic">
                            {t('note')}
                        </p>
                    </div>
                </div>

                {/* Calendly Embed Placeholder */}
                <div className="bg-gray-900/30 rounded-2xl border border-gray-800 p-4 flex flex-col items-center justify-center min-h-[600px]">
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto text-gray-500">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-white">Calendly Embed</h3>
                        <p className="text-gray-400 max-w-xs mx-auto">
                            This area is reserved for the Calendly widget integration.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
