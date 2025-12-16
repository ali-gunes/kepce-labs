import { Locale } from '@/lib/i18n';
import ProjectCard from '@/components/ProjectCard';
import projectsData from '@/data/projects.json';

const pageTitle = {
    en: 'Projects',
    tr: 'Projeler',
};

const pageDescription = {
    en: 'A collection of experiments, apps, and tools.',
    tr: 'Deneyler, uygulamalar ve araçlar koleksiyonu.',
};

export default async function ProjectsPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;

    return (
        <section className="section">
            <div className="container">
                <div style={styles.header}>
                    <h1>{pageTitle[locale]}</h1>
                    <p>{pageDescription[locale]}</p>
                </div>

                <div className="grid grid-3">
                    {(projectsData.projects as any[]).map((project) => (
                        <ProjectCard key={project.id} project={project} locale={locale} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const styles = {
    header: {
        marginBottom: 'var(--space-2xl)',
        maxWidth: '600px',
    },
};
