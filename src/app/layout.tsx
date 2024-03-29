import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono';
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import '@radix-ui/themes/styles.css';

import { Theme } from '@radix-ui/themes';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistMono.className}>
        <Theme accentColor="orange" grayColor="gray" radius="full" >
          <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <Navbar />
                {children}
          </ThemeProvider>
        </Theme>
      </body>
    </html>
  )
}
