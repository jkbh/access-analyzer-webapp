type TextCellProps = {
  key: string;
  content: string | number;
};

const TextCell = ({ key, content }: TextCellProps) => {
  switch (typeof content) {
    case "number":
      return (
        <td key={key} className="border-1 p-2 text-right text-3xl">
          {content}
        </td>
      );
    case "string":
      return (
        <td key={key} className="border-1 p-2 text-left text-3xl">
          {content}
        </td>
      );
  }
};

export default TextCell;
