import Link from 'next/link';
import { Locale } from '@/lib/i18n';
import StatusBadge from './StatusBadge';
import PlatformIcons from './PlatformIcons';

interface Project {
    id: string;
    name: string;
    description: { en: string; tr: string };
    status: 'active' | 'experiment' | 'archived';
    platforms: string[];
    accentColor: string;
    hasDocuments?: boolean;
    url?: string;
}

interface ProjectCardProps {
    project: Project;
    locale: Locale;
}

export default function ProjectCard({ project, locale }: ProjectCardProps) {
    const description = project.description[locale];
    const href = project.url || `/${locale}/projects/${project.id}`;

    return (
        <Link href={href} style={{ textDecoration: 'none' }}>
            <div
                className="card"
                style={{
                    ...styles.card,
                    borderLeftColor: project.accentColor,
                    borderLeftWidth: '4px',
                }}
            >
                <div style={styles.header}>
                    <h3 style={styles.title}>{project.name}</h3>
                    <StatusBadge status={project.status} locale={locale} />
                </div>

                <p style={styles.description}>{description}</p>

                <div style={styles.footer}>
                    <PlatformIcons platforms={project.platforms} />
                </div>
            </div>
        </Link>
    );
}

const styles = {
    card: {
        cursor: 'pointer',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 'var(--space-sm)',
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: 600,
        margin: 0,
        color: 'var(--color-text)',
    },
    description: {
        fontSize: '1rem',
        lineHeight: 1.6,
        marginBottom: 'var(--space-md)',
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
};
