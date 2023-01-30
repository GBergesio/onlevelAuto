import { useMemo } from "react";

export default function Columns() {
  const columns = useMemo(() => [
    {
      accessorFn: (row) => row.marca + " " + row.modelo + " - " + row.año,
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
      accessorKey: "precio",
      header: "Precio",
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
