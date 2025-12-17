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
        { name: 'Home', href: '' },
        { name: 'Projects', href: '/projects' },
        { name: 'About', href: '/about' },
        { name: 'Updates', href: '/updates' },
        { name: 'Contact', href: '/contact' },
    ],
    tr: [
        { name: 'Ana Sayfa', href: '' },
        { name: 'Projeler', href: '/projects' },
        { name: 'Hakkında', href: '/about' },
        { name: 'Güncellemeler', href: '/updates' },
        { name: 'İletişim', href: '/contact' },
    ],
};

export default function Header({ locale }: HeaderProps) {
    const pathname = usePathname();
    const nav = navigation[locale];
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    const closeMenu = () => setMobileMenuOpen(false);

    return (
        <>
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

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={toggleMenu}
                        style={styles.hamburger}
                        className="mobile-hamburger"
                        aria-label="Toggle menu"
                    >
                        <span style={{
                            ...styles.hamburgerLine,
                            ...(mobileMenuOpen ? styles.hamburgerLineTop : {}),
                        }} />
                        <span style={{
                            ...styles.hamburgerLine,
                            ...(mobileMenuOpen ? styles.hamburgerLineMiddle : {}),
                        }} />
                        <span style={{
                            ...styles.hamburgerLine,
                            ...(mobileMenuOpen ? styles.hamburgerLineBottom : {}),
                        }} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div style={styles.overlay} onClick={closeMenu} />
            )}

            {/* Mobile Menu Panel */}
            <div
                style={{
                    ...styles.mobileMenu,
                    transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
                }}
                className="mobile-menu"
            >
                <nav style={styles.mobileNav}>
                    {nav.map((item) => {
                        const href = `/${locale}${item.href}`;
                        const isActive = pathname === href;

                        return (
                            <Link
                                key={item.name}
                                href={href}
                                onClick={closeMenu}
                                style={{
                                    ...styles.mobileNavLink,
                                    ...(isActive ? styles.mobileNavLinkActive : {}),
                                }}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                    <div style={styles.mobileLanguageSwitcher}>
                        <LanguageSwitcher locale={locale} />
                    </div>
                </nav>
            </div>

            <style jsx global>{`
                @media (min-width: 769px) {
                    .mobile-hamburger,
                    .mobile-menu {
                        display: none !important;
                    }
                }
                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none !important;
                    }
                }
            `}</style>
        </>
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
    hamburger: {
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'space-around',
        width: '28px',
        height: '24px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        zIndex: 101,
    },
    hamburgerLine: {
        width: '100%',
        height: '2px',
        backgroundColor: 'var(--color-text)',
        borderRadius: '2px',
        transition: 'all 0.3s ease',
        transformOrigin: 'center',
    },
    hamburgerLineTop: {
        transform: 'translateY(11px) rotate(45deg)',
    },
    hamburgerLineMiddle: {
        opacity: 0,
    },
    hamburgerLineBottom: {
        transform: 'translateY(-11px) rotate(-45deg)',
    },
    overlay: {
        position: 'fixed' as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 98,
        backdropFilter: 'blur(2px)',
    },
    mobileMenu: {
        position: 'fixed' as const,
        top: 0,
        right: 0,
        bottom: 0,
        width: '280px',
        maxWidth: '80vw',
        backgroundColor: 'var(--color-bg)',
        borderLeft: '1px solid var(--color-border)',
        zIndex: 99,
        transition: 'transform 0.3s ease',
        overflowY: 'auto' as const,
    },
    mobileNav: {
        display: 'flex',
        flexDirection: 'column' as const,
        padding: 'var(--space-2xl) var(--space-lg)',
        gap: 'var(--space-md)',
    },
    mobileNavLink: {
        fontSize: '1.125rem',
        fontWeight: 500,
        color: 'var(--color-text-secondary)',
        padding: 'var(--space-sm) 0',
        borderBottom: '1px solid var(--color-border)',
        transition: 'color var(--transition-fast)',
    },
    mobileNavLinkActive: {
        color: 'var(--color-text)',
        fontWeight: 600,
    },
    navLink: {
        fontSize: '0.95rem',
        fontWeight: 500,
        color: 'var(--color-text-secondary)',
        transition: 'color var(--transition-fast)',
        whiteSpace: 'nowrap' as const,
    },
    navLinkActive: {
        color: 'var(--color-text)',
    },
    mobileLanguageSwitcher: {
        marginTop: 'var(--space-lg)',
        paddingTop: 'var(--space-lg)',
        borderTop: '1px solid var(--color-border)',
    },
};
