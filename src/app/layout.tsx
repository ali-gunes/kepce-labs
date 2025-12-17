import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Kepce Labs',
    description: 'Building digital products that matter',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
