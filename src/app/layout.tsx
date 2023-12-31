import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from "@clerk/localizations";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next APP',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={ptBR} appearance={{
      variables: {
        colorPrimary: "red",
        colorText: "black"

      }
    }}>
      <html lang="en">
        <body className={inter.className}>
          <div>
            {children}
          </div>

        </body>
      </html>
    </ClerkProvider >
  )
}
