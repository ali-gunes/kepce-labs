import { ReactNode } from 'react';

interface DocumentLayoutProps {
    title: string;
    lastUpdated?: string;
    children: ReactNode;
}

export default function DocumentLayout({ title, lastUpdated, children }: DocumentLayoutProps) {
    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.title}>{title}</h1>
                {lastUpdated && (
                    <p style={styles.updated}>Last updated: {lastUpdated}</p>
                )}
            </div>
            <div style={styles.content}>{children}</div>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
    },
    header: {
        marginBottom: 'var(--space-2xl)',
        paddingBottom: 'var(--space-lg)',
        borderBottom: '1px solid var(--color-border)',
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: 'var(--space-sm)',
    },
    updated: {
        fontSize: '0.875rem',
        color: 'var(--color-text-secondary)',
        margin: 0,
    },
    content: {
        fontSize: '1rem',
        lineHeight: 1.8,
    },
};
