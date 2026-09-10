import './globals.css'

export const metadata = {
  title: 'Team Lead - Full Stack Developer | Blockchain Specialist',
  description: '8 years experienced Team Lead - Full Stack Developer specializing in Blockchain, AI, E-commerce, and Full Stack Development. Expert in Next.js, Node.js, React, and Web3 technologies.',
  keywords: 'Full Stack Developer, Blockchain Developer, Senior Software Engineer, Next.js, Node.js, React, Web3, NFT, Cryptocurrency, E-commerce, AI Development',
  author: 'Team Lead - Full Stack Developer',
  openGraph: {
    type: 'website',
    title: 'Team Lead - Full Stack Developer Portfolio',
    description: 'Expert in Blockchain, AI, and Full Stack Development',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}