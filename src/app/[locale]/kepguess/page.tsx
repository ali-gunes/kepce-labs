import Link from 'next/link';
import { Locale } from '@/lib/i18n';

const content = {
    en: {
        title: 'KepGuess',
        subtitle: 'A fun prediction game where you can bet on outcomes and test your intuition.',
        description: 'KepGuess is a mobile app available on iOS and Android where you can make predictions on various topics, compete with friends, and test your intuition.',
        downloadTitle: 'Download Now',
        comingSoon: 'Coming Soon',
        features: [
            'Make predictions on trending topics',
            'Compete with friends',
            'Earn rewards for accurate predictions',
            'Track your prediction history',
        ],
        legal: 'Legal Documents',
        terms: 'Terms of Service',
        privacy: 'Privacy Policy',
    },
    tr: {
        title: 'KepGuess',
        subtitle: 'Tahminlerde bulunup sezgilerinizi test edebileceğiniz eğlenceli bir tahmin oyunu.',
        description: 'KepGuess, iOS ve Android\'de mevcut olan, çeşitli konularda tahminlerde bulunabileceğiniz, arkadaşlarınızla yarışabileceğiniz ve sezgilerinizi test edebileceğiniz bir mobil uygulamadır.',
        downloadTitle: 'Hemen İndir',
        comingSoon: 'Yakında',
        features: [
            'Güncel konularda tahminlerde bulunun',
            'Arkadaşlarınızla yarışın',
            'Doğru tahminler için ödüller kazanın',
            'Tahmin geçmişinizi takip edin',
        ],
        legal: 'Yasal Belgeler',
        terms: 'Kullanım Koşulları',
        privacy: 'Gizlilik Politikası',
    },
};

export default async function KepGuessPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const pageContent = content[locale];

    return (
        <div className="container" style={styles.container}>
            <div style={styles.hero}>
                <h1 style={styles.title}>{pageContent.title}</h1>
                <p style={styles.subtitle}>{pageContent.subtitle}</p>
                <p style={styles.description}>{pageContent.description}</p>
            </div>

            <div style={styles.features}>
                <ul style={styles.featureList}>
                    {pageContent.features.map((feature, index) => (
                        <li key={index} style={styles.featureItem}>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <div style={styles.download}>
                <div style={styles.downloadBadge}>
                    <span style={styles.comingSoon}>{pageContent.comingSoon}</span>
                </div>
            </div>

            <div style={styles.legal}>
                <h2 style={styles.legalTitle}>{pageContent.legal}</h2>
                <div style={styles.legalLinks}>
                    <Link href={`/${locale}/kepguess/terms`} style={styles.legalLink}>
                        {pageContent.terms}
                    </Link>
                    <Link href={`/${locale}/kepguess/privacy`} style={styles.legalLink}>
                        {pageContent.privacy}
                    </Link>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: 'var(--space-2xl) 0',
    },
    hero: {
        textAlign: 'center' as const,
        marginBottom: 'var(--space-3xl)',
    },
    title: {
        fontSize: '3rem',
        fontWeight: 700,
        marginBottom: 'var(--space-md)',
        color: 'var(--color-kepguess)',
    },
    subtitle: {
        fontSize: '1.5rem',
        marginBottom: 'var(--space-lg)',
        color: 'var(--color-text)',
    },
    description: {
        fontSize: '1.125rem',
        lineHeight: 1.6,
        color: 'var(--color-text-secondary)',
    },
    features: {
        marginBottom: 'var(--space-3xl)',
    },
    featureList: {
        listStyle: 'none',
        padding: 0,
        display: 'grid',
        gap: 'var(--space-md)',
    },
    featureItem: {
        padding: 'var(--space-md)',
        backgroundColor: 'var(--color-background-secondary)',
        borderRadius: 'var(--radius-md)',
        fontSize: '1.125rem',
        borderLeft: '4px solid var(--color-kepguess)',
    },
    download: {
        textAlign: 'center' as const,
        marginBottom: 'var(--space-3xl)',
    },
    downloadBadge: {
        display: 'inline-block',
        padding: 'var(--space-md) var(--space-xl)',
        backgroundColor: 'var(--color-background-secondary)',
        borderRadius: 'var(--radius-lg)',
    },
    comingSoon: {
        fontSize: '1.25rem',
        fontWeight: 600,
        color: 'var(--color-kepguess)',
    },
    legal: {
        borderTop: '1px solid var(--color-border)',
        paddingTop: 'var(--space-2xl)',
    },
    legalTitle: {
        fontSize: '1.5rem',
        fontWeight: 600,
        marginBottom: 'var(--space-lg)',
    },
    legalLinks: {
        display: 'flex',
        gap: 'var(--space-lg)',
        flexWrap: 'wrap' as const,
    },
    legalLink: {
        fontSize: '1rem',
        fontWeight: 500,
        textDecoration: 'underline',
    },
};
