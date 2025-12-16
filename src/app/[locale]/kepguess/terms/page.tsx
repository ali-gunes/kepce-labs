import { Locale } from '@/lib/i18n';
import DocumentLayout from '@/components/DocumentLayout';

const content = {
    en: {
        title: 'Terms of Service',
        lastUpdated: 'December 16, 2025',
    },
    tr: {
        title: 'Kullanım Koşulları',
        lastUpdated: '16 Aralık 2025',
    },
};

export default async function TermsPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const pageContent = content[locale];

    return (
        <section className="section">
            <div className="container">
                <DocumentLayout title={`KepGuess - ${pageContent.title}`} lastUpdated={pageContent.lastUpdated}>
                    {locale === 'en' ? (
                        <EnglishContent />
                    ) : (
                        <TurkishContent />
                    )}
                </DocumentLayout>
            </div>
        </section>
    );
}

function EnglishContent() {
    return (
        <div>
            <h2>1. Acceptance of Terms</h2>
            <p>
                By accessing and using KepGuess ("the App"), you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2>2. Use License</h2>
            <p>
                Permission is granted to temporarily use the App for personal, non-commercial purposes. This is the grant of a license, not a transfer of title.
            </p>

            <h2>3. User Accounts</h2>
            <p>
                You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
            </p>

            <h2>4. Virtual Currency</h2>
            <p>
                The App may include virtual currency (KEP) that can be earned through gameplay. Virtual currency has no real-world value and cannot be exchanged for real money.
            </p>

            <h2>5. Prohibited Uses</h2>
            <p>
                You may not use the App for any illegal or unauthorized purpose. You must not violate any laws in your jurisdiction while using the App.
            </p>

            <h2>6. Modifications</h2>
            <p>
                We reserve the right to modify or replace these Terms at any time. Continued use of the App after any changes constitutes acceptance of those changes.
            </p>

            <h2>7. Contact</h2>
            <p>
                If you have any questions about these Terms, please contact us at hello@kepcelabs.com
            </p>
        </div>
    );
}

function TurkishContent() {
    return (
        <div>
            <h2>1. Koşulların Kabulü</h2>
            <p>
                KepGuess'e ("Uygulama") erişerek ve kullanarak, bu sözleşmenin hüküm ve koşullarını kabul etmiş olursunuz.
            </p>

            <h2>2. Kullanım Lisansı</h2>
            <p>
                Uygulamayı kişisel, ticari olmayan amaçlarla geçici olarak kullanmanız için izin verilmiştir. Bu bir lisans verilmesidir, mülkiyet devri değildir.
            </p>

            <h2>3. Kullanıcı Hesapları</h2>
            <p>
                Hesabınızın ve şifrenizin gizliliğini korumaktan siz sorumlusunuz. Hesabınız altında gerçekleşen tüm faaliyetlerin sorumluluğunu kabul etmiş olursunuz.
            </p>

            <h2>4. Sanal Para Birimi</h2>
            <p>
                Uygulama, oyun içinde kazanılabilen sanal para birimi (KEP) içerebilir. Sanal para biriminin gerçek dünya değeri yoktur ve gerçek parayla değiştirilemez.
            </p>

            <h2>5. Yasaklı Kullanımlar</h2>
            <p>
                Uygulamayı yasadışı veya yetkisiz herhangi bir amaç için kullanamazsınız. Uygulamayı kullanırken yetki alanınızdaki yasaları ihlal etmemelisiniz.
            </p>

            <h2>6. Değişiklikler</h2>
            <p>
                Bu Koşulları herhangi bir zamanda değiştirme veya değiştirme hakkını saklı tutarız. Değişikliklerden sonra Uygulamayı kullanmaya devam etmek, bu değişiklikleri kabul ettiğiniz anlamına gelir.
            </p>

            <h2>7. İletişim</h2>
            <p>
                Bu Koşullar hakkında sorularınız varsa, lütfen hello@kepcelabs.com adresinden bizimle iletişime geçin.
            </p>
        </div>
    );
}
