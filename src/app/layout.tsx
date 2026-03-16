import type { Metadata } from 'next';
import './globals.css';
import { ToastProvider } from '@/components/ui/Toast';

export const metadata: Metadata = {
  title: 'PropCopy AI — Listing Copy That Closes. In 10 Seconds.',
  description:
    'PropCopy AI generates listing descriptions, social posts, buyer emails, and more in 10 seconds — built exclusively for real estate agents.',
  keywords: ['real estate', 'AI', 'listing descriptions', 'real estate marketing', 'MLS copy'],
  openGraph: {
    title: 'PropCopy AI — Stop Writing. Start Closing.',
    description:
      'AI-powered content for real estate agents. Listing descriptions, social media, emails, and more in 10 seconds.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
