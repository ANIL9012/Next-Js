import "./globals.css";

export const metadata = {
  title: {
    template: "%s | Tecnical Agency",
    default: "Tecnical Agency",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
