import { Locale } from '@/lib/i18n';
import DocumentLayout from '@/components/DocumentLayout';

const content = {
    en: {
        title: 'Privacy Policy',
        lastUpdated: 'December 16, 2025',
    },
    tr: {
        title: 'Gizlilik Politikası',
        lastUpdated: '16 Aralık 2025',
    },
};

export default async function PrivacyPage({ params }: { params: Promise<{ locale: Locale }> }) {
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
            <h2>1. Information We Collect</h2>
            <p>
                We collect information you provide directly to us when you create an account, including your email address and username.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
                We use the information we collect to:
            </p>
            <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Monitor and analyze trends and usage</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
                We do not share your personal information with third parties except as described in this policy. We may share information in the following circumstances:
            </p>
            <ul>
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
                We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access.
            </p>

            <h2>5. Data Retention</h2>
            <p>
                We retain your information for as long as your account is active or as needed to provide you services.
            </p>

            <h2>6. Your Rights</h2>
            <p>
                You may update, correct, or delete your account information at any time by logging into your account or contacting us.
            </p>

            <h2>7. Children's Privacy</h2>
            <p>
                Our service is not directed to children under 13. We do not knowingly collect personal information from children under 13.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
            </p>

            <h2>9. Contact Us</h2>
            <p>
                If you have any questions about this Privacy Policy, please contact us at hello@kepcelabs.com
            </p>
        </div>
    );
}

function TurkishContent() {
    return (
        <div>
            <h2>1. Topladığımız Bilgiler</h2>
            <p>
                Hesap oluşturduğunuzda bize doğrudan sağladığınız e-posta adresiniz ve kullanıcı adınız dahil olmak üzere bilgileri topluyoruz.
            </p>

            <h2>2. Bilgilerinizi Nasıl Kullanıyoruz</h2>
            <p>
                Topladığımız bilgileri şu amaçlarla kullanıyoruz:
            </p>
            <ul>
                <li>Hizmetlerimizi sağlamak, sürdürmek ve geliştirmek</li>
                <li>Size teknik bildirimler ve destek mesajları göndermek</li>
                <li>Yorumlarınıza ve sorularınıza yanıt vermek</li>
                <li>Trendleri ve kullanımı izlemek ve analiz etmek</li>
            </ul>

            <h2>3. Bilgi Paylaşımı</h2>
            <p>
                Kişisel bilgilerinizi bu politikada açıklananlar dışında üçüncü taraflarla paylaşmıyoruz. Bilgileri aşağıdaki durumlarda paylaşabiliriz:
            </p>
            <ul>
                <li>İzninizle</li>
                <li>Yasal yükümlülüklere uymak için</li>
                <li>Haklarımızı ve güvenliğimizi korumak için</li>
            </ul>

            <h2>4. Veri Güvenliği</h2>
            <p>
                Kişisel bilgilerinizi kayıp, hırsızlık, kötüye kullanım ve yetkisiz erişimden korumaya yardımcı olmak için makul önlemler alıyoruz.
            </p>

            <h2>5. Veri Saklama</h2>
            <p>
                Bilgilerinizi hesabınız aktif olduğu sürece veya size hizmet sağlamak için gerektiği sürece saklıyoruz.
            </p>

            <h2>6. Haklarınız</h2>
            <p>
                Hesabınıza giriş yaparak veya bizimle iletişime geçerek hesap bilgilerinizi istediğiniz zaman güncelleyebilir, düzeltebilir veya silebilirsiniz.
            </p>

            <h2>7. Çocukların Gizliliği</h2>
            <p>
                Hizmetimiz 13 yaşın altındaki çocuklara yönelik değildir. 13 yaşın altındaki çocuklardan bilerek kişisel bilgi toplamıyoruz.
            </p>

            <h2>8. Bu Politikadaki Değişiklikler</h2>
            <p>
                Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Yeni politikayı bu sayfada yayınlayarak sizi herhangi bir değişiklik hakkında bilgilendireceğiz.
            </p>

            <h2>9. Bize Ulaşın</h2>
            <p>
                Bu Gizlilik Politikası hakkında sorularınız varsa, lütfen hello@kepcelabs.com adresinden bizimle iletişime geçin.
            </p>
        </div>
    );
}
