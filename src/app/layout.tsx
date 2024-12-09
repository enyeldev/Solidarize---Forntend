
import { Navbar } from '@/components/Navbar'
import {Outlet} from 'react-router'

export function RootLayout() {
  return (
    <html lang="es">
      <body className={''}>
        <Navbar />
        <main className="container mx-auto p-4">
          {<Outlet/>}
        </main>
      </body>
    </html>
  )
}

