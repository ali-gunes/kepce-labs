import { Locale } from '@/lib/i18n';
import contentData from '@/data/content.json';

export default async function UpdatesPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const content = contentData.updates;

    return (
        <section className="section">
            <div className="container">
                <div style={styles.content}>
                    <h1>{content.title[locale]}</h1>
                    <p style={styles.description}>{content.description[locale]}</p>

                    <div style={styles.updates}>
                        {content.items.map((item, index) => (
                            <div key={index} style={styles.update}>
                                <time style={styles.date}>{item.date}</time>
                                <p style={styles.text}>{item.content[locale]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const styles = {
    content: {
        maxWidth: '700px',
        margin: '0 auto',
    },
    description: {
        fontSize: '1.125rem',
        marginBottom: 'var(--space-2xl)',
    },
    updates: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: 'var(--space-xl)',
    },
    update: {
        paddingBottom: 'var(--space-lg)',
        borderBottom: '1px solid var(--color-border)',
    },
    date: {
        display: 'block',
        fontSize: '0.875rem',
        color: 'var(--color-text-secondary)',
        marginBottom: 'var(--space-sm)',
        fontWeight: 600,
    },
    text: {
        fontSize: '1.125rem',
        lineHeight: 1.7,
        color: 'var(--color-text)',
        margin: 0,
    },
};
