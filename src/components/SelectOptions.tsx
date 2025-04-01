import TickIcon from "../icons/TickIcon";

interface CategoryOptionProps {
  id: string;
  name: string;
  selectedId: string | null;
  onSelect: (id: string) => void;
  disabled?: boolean;
  isCorrect?: boolean;
  isWrong?: boolean;
}

function SelectOptions({
  id,
  name,
  selectedId,
  onSelect,
  disabled,
  isCorrect,
  isWrong,
}: CategoryOptionProps) {
  const isSelected = id === selectedId;

  return (
    <div
      onClick={() => {
        if (!disabled) onSelect(id);
      }}
      className={`border rounded-md p-4 flex items-center cursor-pointer transition-colors ${
        isSelected
          ? "border-primary"
          : "border-neutral-300 hover:border-neutral-400"
      } ${isCorrect ? "bg-success/10 border-success" : ""} ${
        isWrong ? "bg-error/10 border-error" : ""
      }`}
    >
      <div
        className={`w-6 h-6 rounded-full border flex items-center justify-center mr-3 ${
          isSelected ? "border-primary" : "border-neutral-400"
        }`}
      >
        {isSelected && <TickIcon />}
      </div>
      <span className="text-primary-dark">{name}</span>
    </div>
  );
}

export default SelectOptions;
