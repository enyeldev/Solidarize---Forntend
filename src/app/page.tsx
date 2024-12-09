import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export function Home() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Donantes</CardTitle>
          <CardDescription>Gestiona la información de los donantes</CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Campañas</CardTitle>
          <CardDescription>Administra las campañas de donación</CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Donaciones</CardTitle>
          <CardDescription>Registra y consulta las donaciones</CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Reportes</CardTitle>
          <CardDescription>Genera reportes de donaciones</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}

