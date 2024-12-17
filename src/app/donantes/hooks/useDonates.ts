import { AddDonorRequest, DonorDto, Response } from "@/types";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const DEFAULT_DONOR_DTO = {
  id: 0,
  addres: "",
  email: "",
  name: "",
  phone: "",
};

const DEFAUL_ADD_REQUEST = {
  addres: "",
  email: "",
  name: "",
  phone: "",
};

export const useDonantes = () => {
  const [donantes, setDonantes] = useState<DonorDto[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [newDonor, setNewDonor] = useState<AddDonorRequest>(DEFAUL_ADD_REQUEST);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [editData, setEditData] = useState<DonorDto>(DEFAULT_DONOR_DTO);
  const [showModalEdit, setShowModalEdit] = useState(false);

  const { toast } = useToast();

  useEffect(() => {
    const getData = async () => {
      try {
        setShowSkeleton(true);
        const url = `https://localhost:7182/api/Donors/ObtenerDonantes`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = (await response.json()) as Response<DonorDto[]>;
        setDonantes(data.data ? data.data : []);
      } catch (error) {
        console.log(error);
      }
      setShowSkeleton(false);
    };
    getData();
  }, []);

  const donantesFiltrados = useMemo(
    () =>
      busqueda === ""
        ? donantes
        : donantes.filter(
            (donante) =>
              donante.name.toLowerCase().includes(busqueda.toLowerCase()) ||
              donante.email.toLowerCase().includes(busqueda.toLowerCase())
          ),
    [busqueda, donantes]
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(newDonor).includes("")) {
      toast({
        title: "Ocurrio un error",
        description: "Todos los campos son obligatorios",
        variant: "destructive",
      });
      return;
    }

    try {
      toast({
        title: "En progreso...",
        description: "La accion se esta realizando.",
      });

      const url = `https://localhost:7182/api/Donors/AgregarDonante`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDonor),
      });

      const data = (await response.json()) as Response<DonorDto[]>;
      setDonantes(data.data);
      toast({
        title: "Exito!",
        description: data.messages,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async (id: DonorDto["id"]) => {
    console.log(id);
    try {
      const url = `https://localhost:7182/api/Donors/DeleteDonnate`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = (await response.json()) as Response<DonorDto[]>;

      console.log(data);

      setDonantes(data.data);

      toast({
        title: "Exito!",
        description: data.messages,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(editData).includes("")) {
      toast({
        title: "Ocurrio un error",
        description: "Todos los campos son obligatorios",
        variant: "destructive",
      });
      return;
    }

    try {

      toast({
        title: "En progreso...",
        description: "La accion se esta realizando.",
      });

      const url = `https://localhost:7182/api/Donors/EditarDonante`;
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editData),
      });

      const data = (await response.json()) as Response<DonorDto[]>;
      console.log(data);
      setDonantes(data.data);
      toast({
        title: "Exito!",
        description: data.messages,
      });

    } catch (error) {
      console.log(error);
    }
  };

  const handleSetEdit = (data: DonorDto) => {
    setShowModalEdit(true);
    setEditData(data);
  };

  return {
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
    handleEdit,
  };
};
