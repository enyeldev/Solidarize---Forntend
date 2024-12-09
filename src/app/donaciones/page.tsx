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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Donaciones() {
  const [donaciones, setDonaciones] = useState([
    {
      id: 1,
      monto: 100,
      fecha: "2023-05-15",
      donante: "Juan Pérez",
      campana: "Campaña Verano",
    },
    {
      id: 2,
      monto: 200,
      fecha: "2023-05-16",
      donante: "María García",
      campana: "Campaña Navidad",
    },
  ]);

  const [monto, setMonto] = useState(0);
  const [fecha, setFecha] = useState("");
  const [donante, setDonante] = useState("Juan Pérez");
  const [campana, setcampana] = useState("Campaña Verano");

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Gestión de Donaciones</h1>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Input type="date" className="w-auto inline-block" />
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Seleccionar campaña" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="verano">Campaña Verano</SelectItem>
              <SelectItem value="navidad">Campaña Navidad</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Seleccionar donante" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="juan">Juan Pérez</SelectItem>
              <SelectItem value="maria">María García</SelectItem>
            </SelectContent>
          </Select>
          <Button>Filtrar</Button>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Nueva Donación</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Registrar Nueva Donación</DialogTitle>
            </DialogHeader>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const data = {
                  id: 3,
                  monto,
                  fecha,
                  donante,
                  campana,
                };

                setDonaciones([...donaciones, data])
              }}
            >
              <div>
                <Label htmlFor="monto">Monto ($)</Label>
                <Input
                  id="monto"
                  type="number"
                  onChange={(e) => setMonto(e.target.valueAsNumber)}
                />
              </div>
              <div>
                <Label htmlFor="fecha">Fecha</Label>
                <Input
                  id="fecha"
                  type="date"
                  onChange={(e) =>
                    setFecha(e.target.value)
                  }
                />
              </div>
              <div>
                <Label htmlFor="donante">Donante</Label>
                <Select>
                  <SelectTrigger id="donante">
                    <SelectValue placeholder="Seleccionar donante" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="juan">Juan Pérez</SelectItem>
                    <SelectItem value="maria">María García</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="campana">Campaña</Label>
                <Select>
                  <SelectTrigger id="campana">
                    <SelectValue placeholder="Seleccionar campaña" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="verano">Campaña Verano</SelectItem>
                    <SelectItem value="navidad">Campaña Navidad</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit">Guardar</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Monto</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Donante</TableHead>
            <TableHead>Campaña</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {donaciones.map((donacion) => (
            <TableRow key={donacion.id}>
              <TableCell>${donacion.monto}</TableCell>
              <TableCell>{donacion.fecha}</TableCell>
              <TableCell>{donacion.donante}</TableCell>
              <TableCell>{donacion.campana}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
