'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ProjectData } from '@/lib/projects';

interface ProjectCardProps {
    project: ProjectData;
    readMoreText: string;
    showLessText: string;
}

export default function ProjectCard({ project, readMoreText, showLessText }: ProjectCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleCardClick = () => {
        if (project.url && !isExpanded) {
            window.open(project.url, '_blank', 'noopener,noreferrer');
        }
    };

    const toggleExpand = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            onClick={handleCardClick}
            className={`flex flex-col h-full p-8 rounded-2xl bg-gray-900/30 border border-gray-800 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5 ${project.url && !isExpanded ? 'hover:scale-[1.02] cursor-pointer' : ''} ${isExpanded ? 'md:col-span-2 lg:col-span-3' : ''}`}
        >
            <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                    {project.category}
                </span>
                <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-sm text-gray-400 font-mono">{project.role}</p>
            </div>

            {isExpanded && (
                <div className="prose prose-invert prose-sm max-w-none flex-grow animate-in fade-in duration-300">
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
            )}

            <div className="mt-auto pt-6 flex flex-col gap-4">
                <button
                    onClick={toggleExpand}
                    className="self-start text-sm font-medium text-secondary hover:text-white transition-colors flex items-center gap-1"
                >
                    {isExpanded ? showLessText : readMoreText}
                    <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <div className="border-t border-gray-800 pt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span key={tag} className="text-xs text-gray-500 bg-gray-900 px-2 py-1 rounded">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
