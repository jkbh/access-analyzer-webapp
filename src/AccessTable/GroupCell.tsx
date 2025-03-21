type GroupCellProps = {
  group: string;
  hasAccess: boolean;
  isSelected: boolean;
};

const GroupCell = ({ group, hasAccess, isSelected }: GroupCellProps) => {
  return (
    <td key={group} className="border-1 border-gray-200 p-1 text-left text-3xl">
      <div
        className={`min-h-24 min-w-24 rounded-xl ${
          hasAccess
            ? isSelected
              ? `bg-green-600`
              : "bg-gray-400 hover:bg-gray-500"
            : ""
        }`}
      ></div>
    </td>
  );
};

export default GroupCell;
