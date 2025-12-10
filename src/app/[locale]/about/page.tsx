import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import CompetencyCard from '@/components/CompetencyCard';

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
                            <CompetencyCard
                                title={t('skills.technicalTitle')}
                                skills={t.raw('skills.technical') as string[]}
                                colorClass="text-primary"
                                borderColorClass="border-primary"
                            />
                            <CompetencyCard
                                title={t('skills.softSkillsTitle')}
                                skills={t.raw('skills.softSkills') as string[]}
                                colorClass="text-secondary"
                                borderColorClass="border-secondary"
                            />

                            {/* Languages kept simple as requested */}
                            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-600 transition-colors">
                                <h4 className="font-semibold text-white mb-2">{t('skills.languagesTitle')}</h4>
                                <p className="text-sm text-gray-400">{t('skills.languages')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image/Visual Section */}
                <div className="order-1 md:order-2 flex justify-center">
                    <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl shadow-primary/20">
                        <Image
                            src="/images/profile.jpeg"
                            alt="Dr. Jamie Wubben"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
