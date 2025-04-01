export type variantType = "primary" | "success" | "error";

function TickIcon({ variant = "primary" }: { variant?: variantType }) {
  function getColor() {
    switch (variant) {
      case "primary":
        return "#c23b76";
      case "success":
        return "#06AF52";
      case "error":
        return "#FF0000";
      default:
        return "#c23b76"; // Default to success color
    }
  }
  const color = getColor();
  return (
    <svg
      width="97"
      height="96"
      viewBox="0 0 97 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        width="96"
        height="96"
        rx="48"
        fill={color}
        fill-opacity={variant === "primary" ? "1" : "0.1"}
      />
      <path
        d="M28.5 51L41 63.5L68.5 36"
        stroke={variant === "primary" ? "#FFFFFF" : color}
        stroke-width="8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default TickIcon;
