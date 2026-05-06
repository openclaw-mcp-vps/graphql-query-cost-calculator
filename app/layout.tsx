import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GraphQL Query Cost Calculator',
  description: 'Calculate GraphQL query complexity and cost. Analyze queries, identify expensive operations, and get optimization recommendations.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="52c90b23-0b4c-4af8-9e10-920606899498"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
