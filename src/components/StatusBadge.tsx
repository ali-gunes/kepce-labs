import { Locale } from '@/lib/i18n';

interface StatusBadgeProps {
    status: 'active' | 'experiment' | 'archived';
    locale: Locale;
}

const statusLabels = {
    active: { en: 'Active', tr: 'Aktif' },
    experiment: { en: 'Experiment', tr: 'Deney' },
    archived: { en: 'Archived', tr: 'Arşiv' },
};

const statusColors = {
    active: '#4ECDC4',
    experiment: '#FFD93D',
    archived: '#95A5A6',
};

export default function StatusBadge({ status, locale }: StatusBadgeProps) {
    const label = statusLabels[status][locale];
    const color = statusColors[status];

    return (
        <span
            style={{
                ...styles.badge,
                backgroundColor: `${color}20`,
                color: color,
                borderColor: color,
            }}
        >
            {label}
        </span>
    );
}

const styles = {
    badge: {
        display: 'inline-block',
        padding: '0.25rem 0.75rem',
        borderRadius: '4px',
        fontSize: '0.75rem',
        fontWeight: 600,
        textTransform: 'uppercase' as const,
        letterSpacing: '0.05em',
        border: '1px solid',
    },
};
