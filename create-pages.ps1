$appDir = "C:\Users\hardi\Downloads\Even Now\even-now-nextjs\src\app"

# layout.tsx
$layoutContent = @"
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
"@
Set-Content -Path "$appDir\layout.tsx" -Value $layoutContent

# Page generator function
function Create-Page {
    param ($Path, $Component, $ImportPath, $IsSlug)
    $fullPath = "$appDir\$Path"
    if (-not (Test-Path $fullPath)) {
        New-Item -ItemType Directory -Force -Path $fullPath | Out-Null
    }
    
    if ($IsSlug) {
        $pageContent = @"
import { $Component } from '$ImportPath'

export default function Page({ params }: { params: { slug: string } }) {
  return <$Component />
}
"@
    } else {
        $pageContent = @"
import { $Component } from '$ImportPath'

export default function Page() {
  return <$Component />
}
"@
    }
    Set-Content -Path "$fullPath\page.tsx" -Value $pageContent
}

# Create all pages based on the original routes
Create-Page -Path "" -Component "HomePage" -ImportPath "@/components/even-now/pages" -IsSlug $false
Create-Page -Path "about" -Component "AboutPage" -ImportPath "@/components/even-now/pages" -IsSlug $false
Create-Page -Path "approach" -Component "ApproachPage" -ImportPath "@/components/even-now/pages" -IsSlug $false
Create-Page -Path "audit" -Component "AuditPage" -ImportPath "@/components/even-now/forms" -IsSlug $false
Create-Page -Path "contact" -Component "ContactPage" -ImportPath "@/components/even-now/forms" -IsSlug $false
Create-Page -Path "d2c" -Component "D2CPage" -ImportPath "@/components/even-now/pages" -IsSlug $false
Create-Page -Path "global-b2b" -Component "GlobalB2BPage" -ImportPath "@/components/even-now/pages" -IsSlug $false
Create-Page -Path "growth" -Component "GrowthPage" -ImportPath "@/components/even-now/pages" -IsSlug $false
Create-Page -Path "insights" -Component "InsightsIndexPage" -ImportPath "@/components/even-now/pages" -IsSlug $false
Create-Page -Path "insights\[slug]" -Component "InsightArticlePage" -ImportPath "@/components/even-now/pages" -IsSlug $true
Create-Page -Path "procurement" -Component "ProcurementPage" -ImportPath "@/components/even-now/forms" -IsSlug $false
Create-Page -Path "privacy" -Component "PrivacyPage" -ImportPath "@/components/even-now/pages" -IsSlug $false
Create-Page -Path "terms" -Component "TermsPage" -ImportPath "@/components/even-now/pages" -IsSlug $false
Create-Page -Path "thank-you" -Component "ThankYouPage" -ImportPath "@/components/even-now/pages" -IsSlug $false
