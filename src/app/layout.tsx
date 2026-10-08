import './globals.css'
import { Site } from '@/components/even-now/site'

export const metadata = {
  title: 'Even Now - B2B Commercial Growth & Procurement',
  description: 'Even Now helps companies diagnose growth problems, build stronger commercial systems and access new markets through strategy, sales, procurement and business development.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Site>
          {children}
        </Site>
      </body>
    </html>
  )
}
