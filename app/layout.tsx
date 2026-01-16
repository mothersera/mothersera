import "./globals.css";

export const metadata = {
  title: "Mother Era",
  description:
    "Mother Era is a science-backed maternal and child health platform guiding women from pregnancy to early childhood.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
