const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <header style={{ padding: "1rem", background: "#222", color: "#fff" }}>
      <h1>App Header</h1>
    </header>
    <main style={{ flex: 1, padding: "2rem" }}>
      {children}
    </main>
    <footer style={{ padding: "1rem", background: "#eee", textAlign: "center" }}>
      App Footer
    </footer>
  </div>
)

export default AppLayout
