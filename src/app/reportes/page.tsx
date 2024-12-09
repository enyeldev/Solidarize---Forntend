import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function Reportes() {
  const [reportes, setReportes] = useState([
    {
      id: 1,
      mes: "Enero",
      totalDonaciones: 5000,
      campanaDestacada: "Campaña Verano",
      donanteDestacado: "Juan Pérez",
    },
    {
      id: 2,
      mes: "Febrero",
      totalDonaciones: 6000,
      campanaDestacada: "Campaña Navidad",
      donanteDestacado: "María García",
    },
  ]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Generación de Reportes</h1>
      <div className="flex justify-between items-center">
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Seleccionar mes" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="enero">Enero</SelectItem>
            <SelectItem value="febrero">Febrero</SelectItem>
            {/* Agregar más meses */}
          </SelectContent>
        </Select>
        <div className="space-x-2">
          <Button>Generar Reporte</Button>
          <Button variant="outline">Exportar a PDF</Button>
          <Button variant="outline">Exportar a Excel</Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Mes</TableHead>
            <TableHead>Total Donaciones</TableHead>
            <TableHead>Campaña Destacada</TableHead>
            <TableHead>Donante Destacado</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reportes.map((reporte) => (
            <TableRow key={reporte.id}>
              <TableCell>{reporte.mes}</TableCell>
              <TableCell>${reporte.totalDonaciones}</TableCell>
              <TableCell>{reporte.campanaDestacada}</TableCell>
              <TableCell>{reporte.donanteDestacado}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
