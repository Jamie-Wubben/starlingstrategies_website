import { getTranslations } from 'next-intl/server';
import ContactForm from '@/components/ContactForm';

export default async function ContactPage() {
    const t = await getTranslations('ContactPage');

    return (
        <div className="min-h-screen py-20 px-4 max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-gray-300">
                        {t('subtitle')}
                    </p>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        {t('content')}
                    </p>
                </div>

                <div className="bg-gray-900/30 p-8 md:p-10 rounded-2xl border border-gray-800 shadow-xl shadow-primary/5">
                    <ContactForm />

                    <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400">
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <a href={`mailto:${t('email')}`} className="hover:text-white transition-colors font-medium">{t('email')}</a>
                        </div>
                        <p className="text-sm italic">
                            {t('note')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
