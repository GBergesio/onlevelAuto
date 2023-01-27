import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    name: {
      vehiculo: "Ford Fiesta",
      modelo: "2020",
    },
    Cilindrada: "2.0",
    Kilometraje: "165000Kms",
    Precio: "$2.500.000",
  },
  {
    name: {
      vehiculo: "Honda Civic",
      modelo: "2017",
    },
    Cilindrada: "2.5",
    Kilometraje: "15000Kms",
    Precio: "$4.500.000",
  },
  {
    name: {
      vehiculo: "VW Bora",
      modelo: "2010",
    },
    Cilindrada: "2.0",
    Kilometraje: "265000Kms",
    Precio: "$5.500.000",
  },
  {
    name: {
      vehiculo: "Toyota Corolla",
      modelo: "2022",
    },
    Cilindrada: "21.6",
    Kilometraje: "5000Kms",
    Precio: "$7.500.000",
  },
];

const CarTable = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "name.vehiculo", //access nested data with dot notation
        header: "Vehículo",
      },
      {
        accessorKey: "name.modelo",
        header: "Modelo",
      },
      {
        accessorKey: "Cilindrada", //normal accessorKey
        header: "Cilindrada",
      },
      {
        accessorKey: "Kilometraje",
        header: "Kilometraje",
      },
      {
        accessorKey: "Precio",
        header: "Precio",
      },
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} />;
};

export default CarTable;
