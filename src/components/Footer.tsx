import { Locale } from '@/lib/i18n';

interface FooterProps {
    locale: Locale;
}

const footerContent = {
    en: {
        copyright: '© 2025 Kepce Labs. All rights reserved.',
        links: [
            { name: 'GitHub', href: 'https://github.com' },
            { name: 'Email', href: 'mailto:hello@kepcelabs.com' },
        ],
    },
    tr: {
        copyright: '© 2025 Kepce Labs. Tüm hakları saklıdır.',
        links: [
            { name: 'GitHub', href: 'https://github.com' },
            { name: 'E-posta', href: 'mailto:hello@kepcelabs.com' },
        ],
    },
};

export default function Footer({ locale }: FooterProps) {
    const content = footerContent[locale];

    return (
        <footer style={styles.footer}>
            <div className="container" style={styles.container}>
                <p style={styles.copyright}>{content.copyright}</p>
                <div style={styles.links}>
                    {content.links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.link}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        borderTop: '1px solid var(--color-border)',
        padding: 'var(--space-2xl) 0',
        marginTop: 'var(--space-3xl)',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap' as const,
        gap: 'var(--space-md)',
    },
    copyright: {
        fontSize: '0.875rem',
        color: 'var(--color-text-secondary)',
        margin: 0,
    },
    links: {
        display: 'flex',
        gap: 'var(--space-lg)',
    },
    link: {
        fontSize: '0.875rem',
        fontWeight: 500,
    },
};
