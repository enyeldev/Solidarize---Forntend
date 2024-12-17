import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Campanas() {
  const [campanas, setCampanas] = useState([
    {
      id: 1,
      nombre: "Campaña Verano",
      objetivo: 10000,
      descripcion: "Campaña para el verano",
      fechaInicio: "2023-06-01",
      fechaFin: "2023-08-31",
    },
    {
      id: 2,
      nombre: "Campaña Navidad",
      objetivo: 20000,
      descripcion: "Campaña navideña",
      fechaInicio: "2023-12-01",
      fechaFin: "2023-12-31",
    },
  ]);

  const [data, setData] = useState<any>();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Gestión de Campañas</h1>
      <div className="flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Nueva Campaña</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Crear Nueva Campaña</DialogTitle>
            </DialogHeader>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setCampanas([
                  ...campanas,
                  {
                    id: 3,
                    nombre: "Campaña Jovenes",
                    objetivo: 30000,
                    descripcion: "Jovenes Necesitados",
                    fechaInicio: "2024-12-01",
                    fechaFin: "2025-12-31",
                  },
                ]);
              }}
            >
              <div>
                <Label htmlFor="nombre">Nombre</Label>
                <Input id="nombre" onChange={(e) => setData({ ...data })} />
              </div>
              <div>
                <Label htmlFor="objetivo">Objetivo ($)</Label>
                <Input id="objetivo" type="number" />
              </div>
              <div>
                <Label htmlFor="descripcion">Descripción</Label>
                <Textarea id="descripcion" />
              </div>
              <div>
                <Label htmlFor="fechaInicio">Fecha de Inicio</Label>
                <Input id="fechaInicio" type="date" />
              </div>
              <div>
                <Label htmlFor="fechaFin">Fecha de Fin</Label>
                <Input id="fechaFin" type="date" />
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
            <TableHead>Objetivo</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead>Fecha de Inicio</TableHead>
            <TableHead>Fecha de Fin</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campanas.map((campana) => (
            <TableRow key={campana.id}>
              <TableCell>{campana.nombre}</TableCell>
              <TableCell>${campana.objetivo}</TableCell>
              <TableCell>{campana.descripcion}</TableCell>
              <TableCell>{campana.fechaInicio}</TableCell>
              <TableCell>{campana.fechaFin}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2">
                  Editar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
