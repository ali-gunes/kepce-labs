interface PlatformIconsProps {
    platforms: string[];
}

const platformLabels: Record<string, string> = {
    web: '🌐',
    ios: '📱',
    android: '🤖',
};

export default function PlatformIcons({ platforms }: PlatformIconsProps) {
    return (
        <div style={styles.container}>
            {platforms.map((platform) => (
                <span key={platform} style={styles.icon} title={platform}>
                    {platformLabels[platform.toLowerCase()] || '💻'}
                </span>
            ))}
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        gap: 'var(--space-xs)',
    },
    icon: {
        fontSize: '1.25rem',
        opacity: 0.8,
    },
};
