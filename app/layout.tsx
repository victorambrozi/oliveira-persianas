import Head from 'next/head';
import './styles/globals.css';

export const metadata = {
  title: 'Oliveira Persianas',
  description: 'Empresa especializada em Cortinas e Persianas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt_BR">
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <body>{children}</body>
    </html>
  )
}
