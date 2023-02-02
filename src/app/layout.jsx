import Navigation from './components/Navigation'
import '@/styles/globals.css'
// Se importan stilos que se van a usar en forma global en este
// layout y en los hijos del elemento

export default function RootLayout ({ children }) {
  return (
    <html>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
