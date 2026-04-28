export function Card({ children, className = "" }) {
  return (
    <div
      className={className}
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        marginTop: "20px",
        backgroundColor: "#fff",
        color: "#000",
        maxWidth: "500px",
      }}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return (
    <div style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      {children}
    </div>
  );
}