import { getTranslations } from 'next-intl/server';
import { getSortedProjectsData } from '@/lib/projects';
import ReactMarkdown from 'react-markdown';

export default async function ProjectsPage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const t = await getTranslations('ProjectsPage');
    const { locale } = await params;
    const projects = getSortedProjectsData(locale);

    return (
        <div className="min-h-screen py-20 px-4 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                {t('title')}
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => {
                    const CardContent = (
                        <>
                            <div className="mb-6">
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                                    {project.category}
                                </span>
                                <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
                                <p className="text-sm text-gray-400 font-mono">{project.role}</p>
                            </div>

                            <div className="prose prose-invert prose-sm max-w-none flex-grow">
                                <ReactMarkdown
                                    components={{
                                        h2: ({ node, ...props }) => <h3 className="text-lg font-bold text-secondary mt-4 mb-2" {...props} />,
                                        p: ({ node, ...props }) => <p className="text-gray-300 mb-4 leading-relaxed" {...props} />,
                                        a: ({ node, ...props }) => <a className="text-secondary hover:text-white underline transition-colors" {...props} />
                                    }}
                                >
                                    {project.content}
                                </ReactMarkdown>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-800 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs text-gray-500 bg-gray-900 px-2 py-1 rounded">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </>
                    );

                    const cardClasses = "flex flex-col h-full p-8 rounded-2xl bg-gray-900/30 border border-gray-800 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5 hover:scale-[1.02] cursor-pointer";

                    if (project.url) {
                        return (
                            <a
                                key={project.slug}
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cardClasses}
                            >
                                {CardContent}
                            </a>
                        );
                    }

                    return (
                        <div key={project.slug} className={cardClasses.replace('cursor-pointer', '')}>
                            {CardContent}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
