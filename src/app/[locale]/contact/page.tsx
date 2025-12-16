import { Locale } from '@/lib/i18n';
import contentData from '@/data/content.json';

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const content = contentData.contact;

    return (
        <section className="section">
            <div className="container">
                <div style={styles.content}>
                    <h1>{content.title[locale]}</h1>
                    <p style={styles.description}>{content.description[locale]}</p>

                    <div style={styles.links}>
                        <a href="mailto:hello@kepcelabs.com" style={styles.link}>
                            <span style={styles.icon}>✉️</span>
                            <span>hello@kepcelabs.com</span>
                        </a>

                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
                            <span style={styles.icon}>💻</span>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

const styles = {
    content: {
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center' as const,
    },
    description: {
        fontSize: '1.125rem',
        marginBottom: 'var(--space-2xl)',
    },
    links: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: 'var(--space-md)',
        alignItems: 'center',
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-sm)',
        padding: 'var(--space-md) var(--space-xl)',
        border: '2px solid var(--color-border)',
        borderRadius: 'var(--border-radius)',
        fontSize: '1.125rem',
        fontWeight: 500,
        transition: 'all var(--transition-base)',
        minWidth: '300px',
        justifyContent: 'center',
    },
    icon: {
        fontSize: '1.5rem',
    },
};
