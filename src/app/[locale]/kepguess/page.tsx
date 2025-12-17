import { Locale } from '@/lib/i18n';
import DocumentLayout from '@/components/DocumentLayout';
import { promises as fs } from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const content = {
    en: {
        title: 'KepGuess',
        lastUpdated: 'December 17, 2024',
    },
    tr: {
        title: 'KepGuess',
        lastUpdated: '17 Aralık 2024',
    },
};

export default async function KepGuessPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const pageContent = content[locale];

    // Read the markdown file based on locale
    const filePath = path.join(process.cwd(), 'src', 'app', '[locale]', 'kepguess', `kepguess_${locale}.md`);
    const markdownContent = await fs.readFile(filePath, 'utf-8');

    return (
        <section className="section">
            <div className="container">
                <DocumentLayout title={pageContent.title} lastUpdated={pageContent.lastUpdated}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {markdownContent}
                    </ReactMarkdown>
                </DocumentLayout>
            </div>
        </section>
    );
}
