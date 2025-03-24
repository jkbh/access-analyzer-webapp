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
// import { User, Role, mockUsers, calculateAllRoles } from "../User";
import {
  generateUsers,
  User,
  Role,
  calculateAllRoles,
  GroupState,
} from "../generation";

export const AccessAnalyzer = () => {
  const [data, _setData] = React.useState(() => generateUsers(10));
  const [selectedRole, setSelectedRole] = React.useState<Role | undefined>();

  const roles = calculateAllRoles(data);

  const userColumns: ColumnDef<User, string>[] = ["Id", "Name"].map((name) => ({
    id: name.toLowerCase(),
    header: name,
    accessorKey: name.toLowerCase(),
    enablePinning: true,
    cell: (cell) => <TextCell keyName={name} content={cell.getValue()} />,
  }));

  const groups = Array.from(
    new Set(data.flatMap((u) => [...u.groupStates.keys()])),
  ).sort((a, b) => {
    return (
      data.filter((u) => u.groupStates.get(b) === "assigned").length -
      data.filter((u) => u.groupStates.get(a) === "assigned").length
    );
  });

  const groupColumns: AccessorFnColumnDef<User, GroupState>[] = groups.map(
    (group) => ({
      id: group,
      header: () => <GroupHeader header={group} />,
      accessorFn: (row) => row.groupStates.get(group) ?? "not_assigned",
      cell: (cell) => {
        return (
          <GroupCell
            hasAccess={cell.getValue() != "not_assigned"}
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
    enableColumnPinning: true,
    initialState: {
      columnPinning: {
        left: ["id", "name"],
      },
    },
  });

  return (
    <div className="grid grid-rows-2 gap-4">
      <table className="border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={`border-x-1 border-b-2 border-gray-200 border-b-black align-bottom ${header.column.getIsPinned() && header.column.getIsLastColumn("left") ? "border-r-2 border-r-black" : ""}`}
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
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={`h-12 w-12 border-1 border-gray-200 ${cell.column.getIsPinned() && cell.column.getIsLastColumn("left") ? "border-r-2 border-r-black" : ""}`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pad-2 flex h-fit max-w-full flex-wrap gap-2 align-middle">
        {roles.map((role, i) => (
          <div
            key={i}
            className="cursor-pointer rounded-md bg-gray-100 p-2 align-middle text-3xl hover:bg-gray-200"
            onMouseOver={() => setSelectedRole(role)}
            onMouseOut={() => setSelectedRole(undefined)}
          >
            <span>{`role ${i}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
