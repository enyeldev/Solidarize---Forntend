'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'

export function Donantes() {
  const [donantes, setDonantes] = useState([
    { id: 1, nombre: 'Juan Pérez', correo: 'juan@example.com', telefono: '123456789', direccion: 'Calle 123' },
    { id: 2, nombre: 'María García', correo: 'maria@example.com', telefono: '987654321', direccion: 'Avenida 456' },
  ])

  const [busqueda, setBusqueda] = useState('')

  const donantesFiltrados = donantes.filter(donante =>
    donante.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    donante.correo.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Gestión de Donantes</h1>
      <div className="flex justify-between">
        <Input
          placeholder="Buscar donantes..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="max-w-sm"
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button>Nuevo Donante</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Agregar Nuevo Donante</DialogTitle>
            </DialogHeader>
            <form className="space-y-4">
              <div>
                <Label htmlFor="nombre">Nombre</Label>
                <Input id="nombre" />
              </div>
              <div>
                <Label htmlFor="correo">Correo</Label>
                <Input id="correo" type="email" />
              </div>
              <div>
                <Label htmlFor="telefono">Teléfono</Label>
                <Input id="telefono" />
              </div>
              <div>
                <Label htmlFor="direccion">Dirección</Label>
                <Input id="direccion" />
              </div>
              <Button type="submit">Guardar</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Correo</TableHead>
            <TableHead>Teléfono</TableHead>
            <TableHead>Dirección</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {donantesFiltrados.map((donante) => (
            <TableRow key={donante.id}>
              <TableCell>{donante.nombre}</TableCell>
              <TableCell>{donante.correo}</TableCell>
              <TableCell>{donante.telefono}</TableCell>
              <TableCell>{donante.direccion}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2">Editar</Button>
                <Button variant="destructive" size="sm">Eliminar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

