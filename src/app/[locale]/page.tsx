import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations('HomePage');
  const { locale } = await params;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-16">
        {/* Background Effect (Abstract Node/Network) - Placeholder for now */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0"></div>

        <div className="relative z-10 max-w-6xl mx-auto space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary animate-gradient pb-2">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* The Fork (Moved Up) */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Website development */}
            <Link href={`/${locale}/services#website-development`} className="group relative p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-[#f97316]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#f97316]/10 text-left block">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#f97316]/20 rounded-lg flex items-center justify-center mb-6 text-[#f97316]">
                  {/* Icon: Globe/World */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" x2="22" y1="12" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#f97316] transition-colors">{t('fork.website.title')}</h3>
                <p className="text-gray-400 mb-6">{t('fork.website.text')}</p>
                <span className="text-[#f97316] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  {t('fork.website.cta')} <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </Link>

            {/* AI & automation */}
            <Link href={`/${locale}/services#ai-automation`} className="group relative p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 text-left block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 text-primary">
                  {/* Icon: Gear/Process */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{t('fork.automation.title')}</h3>
                <p className="text-gray-400 mb-6">{t('fork.automation.text')}</p>
                <span className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  {t('fork.automation.cta')} <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </Link>

            {/* R&D consulting*/}
            <Link href={`/${locale}/services#rd-consulting`} className="group relative p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-secondary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/10 text-left block">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6 text-secondary">
                  {/* Icon: Drone/Network */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-secondary transition-colors">{t('fork.rd_consulting.title')}</h3>
                <p className="text-gray-400 mb-6">{t('fork.rd_consulting.text')}</p>
                <span className="text-secondary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  {t('fork.rd_consulting.cta')} <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
