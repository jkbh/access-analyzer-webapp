type GroupCellProps = {
  hasAccess: boolean;
  isSelected: boolean;
};

const GroupCell = ({ hasAccess, isSelected }: GroupCellProps) => {
  return (
    <div
      className={`h-full w-full ${
        hasAccess
          ? isSelected
            ? `bg-green-600`
            : "bg-gray-400 hover:bg-gray-500"
          : ""
      }`}
    ></div>
  );
};

export default GroupCell;
