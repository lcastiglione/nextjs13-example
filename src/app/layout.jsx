import Navigation from './components/Navigation'
import { font } from './font'
import '@/styles/globals.css'
// Se importan stilos que se van a usar en forma global en este
// layout y en los hijos del elemento

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>Next.js 13 Example</title>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
