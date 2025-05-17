import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Olcan Ebrem</title>
        <meta name="description" content="Personal website of Olcan Ebrem" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 