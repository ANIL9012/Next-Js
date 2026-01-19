// import "./globals.css";

export const metadata = {
  title: {
    template: "%s | Tecnical Agency",
    default: "Tecnical Agency",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <header style={{ backgroundColor: "orange" }}>Header (Application)</header>
      {children}
      <footer style={{ backgroundColor: "blue" }}>Footer (Application)</footer>
    </>
  );
}
