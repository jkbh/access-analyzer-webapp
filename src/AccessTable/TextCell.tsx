type TextCellProps = {
  keyName: string;
  content: string | number;
};

const TextCell = ({ keyName, content }: TextCellProps) => {
  switch (typeof content) {
    case "number":
      return (
        <span key={keyName} className="p-2 text-right">
          {content}
        </span>
      );
    case "string":
      return (
        <span key={keyName} className="p-2 text-left">
          {content}
        </span>
      );
  }
};

export default TextCell;
