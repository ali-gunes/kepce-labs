'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';
import { useState } from 'react';

interface HeaderProps {
    locale: Locale;
}

const navigation = {
    en: [
        { name: 'Home', href: '', short: 'Home' },
        { name: 'Projects', href: '/projects', short: 'Projects' },
        { name: 'About', href: '/about', short: 'About' },
        { name: 'Updates', href: '/updates', short: 'Updates' },
        { name: 'Contact', href: '/contact', short: 'Contact' },
    ],
    tr: [
        { name: 'Ana Sayfa', href: '', short: 'Ana' },
        { name: 'Projeler', href: '/projects', short: 'Proje' },
        { name: 'Hakkında', href: '/about', short: 'Hakkında' },
        { name: 'Güncellemeler', href: '/updates', short: 'Güncelle' },
        { name: 'İletişim', href: '/contact', short: 'İletişim' },
    ],
};

export default function Header({ locale }: HeaderProps) {
    const pathname = usePathname();
    const nav = navigation[locale];
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header style={styles.header}>
            <div className="container" style={styles.container}>
                <Link href={`/${locale}`} style={styles.logo}>
                    Kepce Labs
                </Link>

                {/* Desktop Navigation */}
                <nav style={styles.desktopNav} className="desktop-nav">
                    {nav.map((item) => {
                        const href = `/${locale}${item.href}`;
                        const isActive = pathname === href;

                        return (
                            <Link
                                key={item.name}
                                href={href}
                                style={{
                                    ...styles.navLink,
                                    ...(isActive ? styles.navLinkActive : {}),
                                }}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                    <LanguageSwitcher locale={locale} />
                </nav>

                {/* Mobile Navigation */}
                <nav style={styles.mobileNav} className="mobile-nav">
                    {nav.slice(0, 3).map((item) => {
                        const href = `/${locale}${item.href}`;
                        const isActive = pathname === href;

                        return (
                            <Link
                                key={item.name}
                                href={href}
                                style={{
                                    ...styles.mobileNavLink,
                                    ...(isActive ? styles.navLinkActive : {}),
                                }}
                            >
                                {item.short}
                            </Link>
                        );
                    })}
                    <LanguageSwitcher locale={locale} />
                </nav>
            </div>

            <style jsx global>{`
                @media (min-width: 641px) {
                    .mobile-nav {
                        display: none !important;
                    }
                }
                @media (max-width: 640px) {
                    .desktop-nav {
                        display: none !important;
                    }
                }
            `}</style>
        </header>
    );
}

const styles = {
    header: {
        borderBottom: '1px solid var(--color-border)',
        padding: 'var(--space-md) 0',
        position: 'sticky' as const,
        top: 0,
        backgroundColor: 'var(--color-bg)',
        zIndex: 100,
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        fontSize: '1.125rem',
        fontWeight: 600,
        letterSpacing: '-0.01em',
    },
    desktopNav: {
        display: 'flex',
        gap: 'var(--space-lg)',
        alignItems: 'center',
    },
    mobileNav: {
        display: 'flex',
        gap: 'var(--space-sm)',
        alignItems: 'center',
        fontSize: '0.875rem',
    },
    navLink: {
        fontSize: '0.95rem',
        fontWeight: 500,
        color: 'var(--color-text-secondary)',
        transition: 'color var(--transition-fast)',
        whiteSpace: 'nowrap' as const,
    },
    mobileNavLink: {
        fontSize: '0.875rem',
        fontWeight: 500,
        color: 'var(--color-text-secondary)',
        transition: 'color var(--transition-fast)',
        whiteSpace: 'nowrap' as const,
    },
    navLinkActive: {
        color: 'var(--color-text)',
    },
};
