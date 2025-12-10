import { getTranslations } from 'next-intl/server';
import { getSortedProjectsData } from '@/lib/projects';
import ProjectList from '@/components/ProjectList';

export default async function ProjectsPage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const t = await getTranslations('ProjectsPage');
    const { locale } = await params;
    const projects = getSortedProjectsData(locale);

    // Extract unique categories
    const categories = Array.from(new Set(projects.map(p => p.category))).sort();

    return (
        <div className="min-h-screen py-20 px-4 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                {t('title')}
            </h1>

            <ProjectList
                projects={projects}
                categories={categories}
                readMoreText={t('readMore') || 'Read More'}
                showLessText={t('showLess') || 'Show Less'}
                filterTitle={t('filterTitle') || 'Filter by Category'}
            />
        </div>
    );
}
