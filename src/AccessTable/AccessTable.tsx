import * as React from "react";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
  AccessorFnColumnDef,
} from "@tanstack/react-table";
import GroupCell from "./GroupCell";
import GroupHeader from "./GroupHeader";
import TextCell from "./TextCell";
import { User, Role, mockUsers, calculateAllRoles } from "../User";

export const AccessAnalyzer = () => {
  const [data, _setData] = React.useState(() => [...mockUsers]);
  const [selectedRole, setSelectedRole] = React.useState<Role | undefined>();

  const roles = calculateAllRoles(data);

  const userColumns: ColumnDef<User, string>[] = ["id", "name"].map((name) => ({
    header: name,
    accessorKey: name,
    cell: (cell) => <TextCell keyName={name} content={cell.getValue()} />,
  }));

  const groups = Array.from(new Set(data.flatMap((u) => u.groups)));

  const groupColumns: AccessorFnColumnDef<User, boolean>[] = groups.map(
    (group) => ({
      id: group,
      header: () => <GroupHeader header={group} />,
      accessorFn: (row) => row.groups.includes(group),
      cell: (cell) => {
        return (
          <GroupCell
            group={group}
            hasAccess={cell.getValue()}
            isSelected={selectedRole?.has(group) ?? false}
          />
        );
      },
    }),
  );

  const columns = [...userColumns, ...groupColumns];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex gap-4">
      <table className="border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border-1 px-2 text-left align-bottom"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row
                .getVisibleCells()
                .map((cell) =>
                  flexRender(cell.column.columnDef.cell, cell.getContext()),
                )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-col justify-between gap-2">
        {roles.map((role, i) => (
          <div
            key={i}
            className="grow cursor-pointer gap-4 rounded-md bg-gray-100 p-2 align-middle text-3xl hover:bg-gray-200"
            onMouseOver={() => setSelectedRole(role)}
            onMouseOut={() => setSelectedRole(undefined)}
          >
            <span>{Array.from(role).join(", ")}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
