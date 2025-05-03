import '../styles/globals.css';
import { ReferralProvider } from '../context/ReferralContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Patient Referral Dashboard',
  description: 'A modern multi-step intake form for providers.',
  icons: {
    icon: './wekare360-favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-wk-green text-wk-navy font-sans min-h-screen">
        <ReferralProvider>
        <ToastContainer />
          {/* Header */}
          <header className="w-full bg-wk-indigo text-white sticky top-0 z-50 shadow-sm">
          <div className="w-full flex items-center px-6 py-3">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/wekare360_logo.png"
                  alt="Wekare360 Logo"
                  width={40}
                  height={40}
                />
                <span className="text-xl text-wk-green"><span className="font-bold">We</span>kare360</span>
              </Link>
            </div>
          </header>

          {/* Main content */}
          <main className="max-w-3xl mx-auto px-4 py-8">{children}</main>
        </ReferralProvider>
      </body>
    </html>
  );
}
