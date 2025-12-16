'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Locale, localeNames } from '@/lib/i18n';

interface LanguageSwitcherProps {
    locale: Locale;
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
    const pathname = usePathname();
    const router = useRouter();

    const switchLocale = (newLocale: Locale) => {
        // Replace the locale in the pathname
        const segments = pathname.split('/');
        segments[1] = newLocale;
        const newPath = segments.join('/');
        router.push(newPath);
    };

    return (
        <div style={styles.container}>
            {(Object.keys(localeNames) as Locale[]).map((loc) => (
                <button
                    key={loc}
                    onClick={() => switchLocale(loc)}
                    style={{
                        ...styles.button,
                        ...(locale === loc ? styles.buttonActive : {}),
                    }}
                >
                    {loc.toUpperCase()}
                </button>
            ))}
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        gap: 'var(--space-xs)',
        marginLeft: 'var(--space-sm)',
    },
    button: {
        background: 'transparent',
        border: '1px solid var(--color-border)',
        borderRadius: '4px',
        padding: '0.25rem 0.5rem',
        fontSize: '0.75rem',
        fontWeight: 600,
        cursor: 'pointer',
        color: 'var(--color-text-secondary)',
        transition: 'all var(--transition-fast)',
        fontFamily: 'var(--font-sans)',
    },
    buttonActive: {
        background: 'var(--color-text)',
        color: 'var(--color-bg)',
        borderColor: 'var(--color-text)',
    },
};
