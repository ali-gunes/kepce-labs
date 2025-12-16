import { Locale } from '@/lib/i18n';
import contentData from '@/data/content.json';

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const content = contentData.about;

    return (
        <section className="section">
            <div className="container">
                <div style={styles.content}>
                    <h1>{content.title[locale]}</h1>

                    <div style={styles.paragraphs}>
                        {content.paragraphs[locale].map((paragraph, index) => (
                            <p key={index} style={styles.paragraph}>
                                {paragraph}
                            </p>
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
    paragraphs: {
        marginTop: 'var(--space-xl)',
    },
    paragraph: {
        fontSize: '1.125rem',
        lineHeight: 1.8,
        marginBottom: 'var(--space-lg)',
        color: 'var(--color-text)',
    },
};
