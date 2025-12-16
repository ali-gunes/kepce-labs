import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { locales, type Locale } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
    title: 'Kepce Labs - Experiments, Apps & Tools',
    description: 'A small place where ideas are turned into working products. Experiments, apps and tools built with curiosity.',
    keywords: ['kepce labs', 'apps', 'experiments', 'tools', 'mobile apps'],
};

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={inter.className} suppressHydrationWarning>
                <Header locale={locale as Locale} />
                <main>{children}</main>
                <Footer locale={locale as Locale} />
            </body>
        </html>
    );
}
