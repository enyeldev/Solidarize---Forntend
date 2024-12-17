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
import { Skeleton } from "@/components/ui/skeleton";

//Custom hook
import { useDonantes } from "./hooks/useDonates";

export function Donantes() {
  const {
    donantesFiltrados,
    setBusqueda,
    busqueda,
    handleSubmit,
    setNewDonor,
    handleRemove,
    showSkeleton,
    setShowModalEdit,
    showModalEdit,
    handleSetEdit,
    editData,
    setEditData,
    handleEdit
  } = useDonantes();

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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  onChange={(e) =>
                    setNewDonor((prev) => ({
                      ...prev,
                      [e.target.id]: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="email">Correo</Label>
                <Input
                  id="email"
                  type="email"
                  onChange={(e) =>
                    setNewDonor((prev) => ({
                      ...prev,
                      [e.target.id]: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  onChange={(e) =>
                    setNewDonor((prev) => ({
                      ...prev,
                      [e.target.id]: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="addres">Dirección</Label>
                <Input
                  id="addres"
                  onChange={(e) =>
                    setNewDonor((prev) => ({
                      ...prev,
                      [e.target.id]: e.target.value,
                    }))
                  }
                />
              </div>
              <Button type="submit">Guardar</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {showSkeleton ? (
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
            <TableRow>
              <TableCell>
                <Skeleton className="w-24 h-5" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-24 h-5" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-24 h-5" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-24 h-5" />
              </TableCell>
              <TableCell>
                <div className="flex gap-4">
                  <Skeleton className="w-28 h-8" />
                  <Skeleton className="w-28 h-8" />
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Skeleton className="w-24 h-5" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-24 h-5" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-24 h-5" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-24 h-5" />
              </TableCell>
              <TableCell>
                <div className="flex gap-4">
                  <Skeleton className="w-28 h-8" />
                  <Skeleton className="w-28 h-8" />
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Skeleton className="w-24 h-5" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-24 h-5" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-24 h-5" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-24 h-5" />
              </TableCell>
              <TableCell>
                <div className="flex gap-4">
                  <Skeleton className="w-28 h-8" />
                  <Skeleton className="w-28 h-8" />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ) : donantesFiltrados.length === 0 ? (
        <h1 className="text-center text-2xl font-bold">No hay donantes</h1>
      ) : (
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
            {donantesFiltrados.map(({ addres, email, id, name, phone }) => (
              <TableRow key={id}>
                <TableCell>{name}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{phone}</TableCell>
                <TableCell>{addres}</TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mr-2"
                    onClick={() =>
                      handleSetEdit({ addres, email, id, name, phone })
                    }
                  >
                    Editar
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleRemove(id)}
                  >
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <Dialog open={showModalEdit} onOpenChange={(e) => setShowModalEdit(e)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar Donante</DialogTitle>
          </DialogHeader>
          <form className="space-y-4" onSubmit={handleEdit}>
            <div>
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                onChange={(e) =>
                  setEditData((prev) => ({
                    ...prev,
                    [e.target.id]: e.target.value,
                  }))
                }
                value={editData.name}
              />
            </div>
            <div>
              <Label htmlFor="email">Correo</Label>
              <Input
                id="email"
                type="email"
                onChange={(e) =>
                  setEditData((prev) => ({
                    ...prev,
                    [e.target.id]: e.target.value,
                  }))
                }
                value={editData.email}
              />
            </div>
            <div>
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                onChange={(e) =>
                  setEditData((prev) => ({
                    ...prev,
                    [e.target.id]: e.target.value,
                  }))
                }
                value={editData.phone}
              />
            </div>
            <div>
              <Label htmlFor="addres">Dirección</Label>
              <Input
                id="addres"
                onChange={(e) =>
                  setEditData((prev) => ({
                    ...prev,
                    [e.target.id]: e.target.value,
                  }))
                }
                value={editData.addres}
              />
            </div>
            <Button type="submit">Editar</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
