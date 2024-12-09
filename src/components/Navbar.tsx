import {Link} from 'react-router'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Gestión de Donaciones
        </Link>
        <div className="space-x-2">
          <Button variant="ghost" asChild>
            <Link to="/donantes">Donantes</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/campanas">Campañas</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/donaciones">Donaciones</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/reportes">Reportes</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

