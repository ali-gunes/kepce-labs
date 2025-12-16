import { Locale } from '@/lib/i18n';
import ProjectCard from '@/components/ProjectCard';
import projectsData from '@/data/projects.json';
import contentData from '@/data/content.json';

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const activeProjects = projectsData.projects.filter(p => p.status === 'active') as any[];

    return (
        <>
            <section className="section">
                <div className="container">
                    <div style={styles.hero}>
                        <h1 style={styles.manifesto}>{contentData.manifesto[locale]}</h1>
                        <p style={styles.subtitle}>{contentData.subtitle[locale]}</p>
                    </div>
                </div>
            </section>

            <section className="section-sm">
                <div className="container">
                    <div className="grid grid-2">
                        {activeProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} locale={locale} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

const styles = {
    hero: {
        textAlign: 'center' as const,
        maxWidth: '800px',
        margin: '0 auto',
        padding: 'var(--space-2xl) 0',
    },
    manifesto: {
        fontSize: '2.5rem',
        fontWeight: 700,
        lineHeight: 1.2,
        marginBottom: 'var(--space-md)',
        color: 'var(--color-text)',
    },
    subtitle: {
        fontSize: '1.25rem',
        color: 'var(--color-text-secondary)',
        fontWeight: 400,
    },
};
