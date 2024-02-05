import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Baloo_2, Roboto } from 'next/font/google'
import '../styles/globals.css'

const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})
const baloo = Baloo_2({
  display: 'swap',
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-baloo',
})

export const metadata: Metadata = {
  title: 'Coffee Delivery Services',
  description:
    'Coffee Delivery Services is a service that provides coffee to customers',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${baloo.variable} ${roboto.variable} prose-headings:font-titles prose-headings:leading-snug`}
    >
      <body className="flex h-screen w-screen justify-center antialiased">
        {children}
      </body>
    </html>
  )
}
