'use client';

import { useState } from 'react';
import { ProjectData } from '@/lib/projects';
import ProjectCard from './ProjectCard';

interface ProjectListProps {
    projects: ProjectData[];
    categories: string[];
    readMoreText: string;
    showLessText: string;
    filterTitle: string;
}

export default function ProjectList({
    projects,
    categories,
    readMoreText,
    showLessText,
    filterTitle
}: ProjectListProps) {
    const [selectedCategories, setSelectedCategories] = useState<string[]>(categories);

    const toggleCategory = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const filteredProjects = projects.filter(project =>
        selectedCategories.includes(project.category)
    );

    return (
        <div>
            <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-4">{filterTitle}</h3>
                <div className="flex flex-wrap gap-3">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => toggleCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${selectedCategories.includes(category)
                                ? 'bg-gray-900/50 border-primary text-primary shadow-[0_0_10px_rgba(168,85,247,0.2)]'
                                : 'bg-gray-900/50 border-gray-700 text-gray-400 hover:border-gray-500'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.slug}
                        project={project}
                        readMoreText={readMoreText}
                        showLessText={showLessText}
                    />
                ))}
            </div>
        </div>
    );
}
