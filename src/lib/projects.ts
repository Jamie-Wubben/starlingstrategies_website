import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export interface ProjectData {
    slug: string;
    title: string;
    role: string;
    category: string;
    tags: string[];
    date: string;
    content: string;
    url?: string;
}

export function getSortedProjectsData(locale: string = 'en'): ProjectData[] {
    // Get file names under /content/projects/[locale]
    const localeDirectory = path.join(projectsDirectory, locale);

    // Check if directory exists, if not fallback to 'en' or return empty
    if (!fs.existsSync(localeDirectory)) {
        console.warn(`Projects directory for locale '${locale}' not found. Falling back to 'en'.`);
        return getSortedProjectsData('en');
    }

    const fileNames = fs.readdirSync(localeDirectory);
    const allProjectsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get slug
        const slug = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(localeDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        const data = matterResult.data as { title: string; role: string; category: string; tags?: string[]; date: string; url?: string };

        // Combine the data with the slug
        return {
            slug,
            content: matterResult.content,
            ...data,
            tags: data.tags || [],
        };
    });

    // Sort projects by date
    return allProjectsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}
