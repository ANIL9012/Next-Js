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
      <header style={{ backgroundColor: "teal" }}>Header (Markating)</header>
      {children}
      <footer style={{ backgroundColor: "yellowgreen" }}>Footer (Markating)</footer>
    </>
  );
}
