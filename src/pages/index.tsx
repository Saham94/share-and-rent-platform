import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import type { GetStaticProps } from 'next';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Head>
        <title>{t('home.title')}</title>
        <meta name="description" content={t('home.description')} />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section - Style Européen */}
        <section className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold text-euro-primary mb-4">
            {t('home.welcome')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('home.description')}
          </p>
        </section>

        {/* Feature Grid - Style Asiatique */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-asian-primary">
            <h3 className="text-xl font-bold text-asian-primary mb-3">
              {t('features.share')}
            </h3>
            <p className="text-gray-600">
              {t('features.shareDescription')}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-asian-secondary">
            <h3 className="text-xl font-bold text-asian-secondary mb-3">
              {t('features.rent')}
            </h3>
            <p className="text-gray-600">
              {t('features.rentDescription')}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-asian-accent">
            <h3 className="text-xl font-bold text-asian-accent mb-3">
              {t('features.connect')}
            </h3>
            <p className="text-gray-600">
              {t('features.connectDescription')}
            </p>
          </div>
        </section>

        {/* CTA Section - Style Hybride */}
        <section className="text-center bg-gradient-to-r from-euro-secondary to-asian-primary p-12 rounded-xl text-white">
          <h2 className="text-3xl font-display font-bold mb-4">
            {t('cta.title')}
          </h2>
          <p className="mb-8 text-lg">
            {t('cta.description')}
          </p>
          <button className="bg-white text-asian-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
            {t('cta.button')}
          </button>
        </section>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'fr', ['common'])),
    },
  };
}