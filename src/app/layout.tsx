import Head from 'next/head';

// local components
import HeaderComponent from './components/header/HeaderComponent';
import GlobalStyle from './styles/global';
import Footer from './components/footer/index';

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
      <body>
        <GlobalStyle />
        <HeaderComponent />
        {children}
        <Footer />
      </body>
    </html>
  )
}
