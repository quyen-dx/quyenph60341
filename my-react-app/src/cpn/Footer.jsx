export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px 0",
        background: "#f5f5f5",
        marginTop: "40px",
        fontSize: "14px",
        color: "#555"
      }}
    >
      © {new Date().getFullYear()} Tour Du Lịch. All rights reserved.
    </footer>
  );
}
