export function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  className = "",
}) {
  const styles = {
    primary: { backgroundColor: "red", color: "white" },
    secondary: { backgroundColor: "gray", color: "white" },
  };

  const sizes = {
    sm: { padding: "5px 10px" },
    md: { padding: "10px 20px" },
    lg: { padding: "15px 25px" },
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={className}
      style={{
        ...styles[variant],
        ...sizes[size],
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}