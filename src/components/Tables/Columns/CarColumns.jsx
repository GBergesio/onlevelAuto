import { useMemo } from "react";

export default function Columns() {
  const columns = useMemo(() => [
    {
      accessorKey: "name.vehiculo", //access nested data with dot notation
      header: "Vehículo",
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
      size: 80,
      enableHiding: false,
      enableColumnActions: false,
    },
    {
      accessorKey: "name.modelo", //access nested data with dot notation
      header: "Modelo",
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
      size: 80,
      enableHiding: false,
      enableColumnActions: false,
    },
  ]);

  return { columns };
}

// const columns = useMemo(
//   () => [
//     {
//       accessorKey: "name.vehiculo", //access nested data with dot notation
//       header: "Vehículo",
//     },
//     {
//       accessorKey: "name.modelo",
//       header: "Modelo",
//     },
//     {
//       accessorKey: "Cilindrada", //normal accessorKey
//       header: "Cilindrada",
//     },
//     {
//       accessorKey: "Kilometraje",
//       header: "Kilometraje",
//     },
//     {
//       accessorKey: "Precio",
//       header: "Precio",
//     },
//   ],
//   []
// );
