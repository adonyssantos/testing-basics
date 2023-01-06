export default function Button({ type = "primary", children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: type === "primary" ? "blue" : "red",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
