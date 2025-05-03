import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patient Referral Dashboard | Wekare360',
  description: 'Start the patient referral process with ease. Built for Primary Care Providers.',
  keywords: ['patient referral', 'wekare360', 'healthcare intake', 'multi-step form'],
  openGraph: {
    title: 'Patient Referral Dashboard | Wekare360',
    description: 'Streamline your patient referral process with our intuitive multi-step form.',
    url: 'https://www.wekare.ai/',
    siteName: 'Wekare360',
    images: [
      {
        url: './wekare360_logo.png',
        width: 600,
        height: 600,
        alt: 'Wekare360 Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Patient Referral Dashboard | Wekare360',
    description: 'Streamline referrals with a modern intake form.',
    images: ['/wekare360_logo.png'],
  },
};