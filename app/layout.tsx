import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ReactQueryProvider } from "@/components/react-query-provider"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ReactQueryProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {/*               <div className="absolute z-10 max-h-screen w-screen">
                <div className="relative flex min-h-screen flex-col">
                  <SiteHeader />
                  <div className="flex flex-1 items-center justify-center max-xl:px-4">
                    {children}
                  </div>
                </div>
              </div>
              <div className="absolute z-0 h-screen w-screen" /> */}
              <SiteHeader />
              <div className="flex flex-1 items-center justify-center max-xl:px-4">
                {children}
              </div>
              <TailwindIndicator />
            </ThemeProvider>
          </ReactQueryProvider>
        </body>
      </html>
    </>
  )
}
