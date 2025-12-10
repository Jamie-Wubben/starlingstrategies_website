'use client';

import { useState, useEffect } from 'react';

interface CompetencyCardProps {
    title: string;
    skills: string[];
    colorClass: string; // e.g., 'text-primary' or 'text-secondary'
    borderColorClass: string; // e.g., 'border-primary' or 'border-secondary'
}

export default function CompetencyCard({ title, skills, colorClass, borderColorClass }: CompetencyCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        // Open automatically on desktop (md breakpoint is usually 768px)
        if (window.matchMedia('(min-width: 768px)').matches) {
            setIsExpanded(true);
        }
    }, []);

    return (
        <div
            onClick={() => setIsExpanded(!isExpanded)}
            className={`
                p-6 rounded-xl bg-gray-900/50 border border-gray-800 
                transition-all duration-300 cursor-pointer
                hover:shadow-lg hover:scale-[1.02]
                ${isExpanded ? `shadow-xl scale-[1.02] ${borderColorClass}` : 'hover:border-gray-600'}
            `}
        >
            <div className="flex justify-between items-center mb-2">
                <h4 className={`font-semibold text-lg ${colorClass}`}>{title}</h4>
                <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>

            <div className={`
                overflow-hidden transition-all duration-500 ease-in-out
                ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
            `}>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {skills.map((skill, index) => (
                        <li key={index} className="text-sm md:text-base">
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>

            {!isExpanded && skills.length > 0 && (
                <p className="text-sm text-gray-500 mt-2 truncate">
                    {skills[0]}...
                </p>
            )}
        </div>
    );
}
