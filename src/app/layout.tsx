import '@/styles/globals.css'
import { GeistSans } from 'geist/font/sans'
import { type Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
export const metadata: Metadata = {
  title: 'LinkoHub',
  description: 'All my links in one tidy space',
  icons: [{ url: '/Profile.jpg' }],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
 <body>
  
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  )
}
