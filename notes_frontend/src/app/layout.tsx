import type { Metadata } from "next";
import "./globals.css";
import { NotesProvider } from "@/context/NotesContext";

export const metadata: Metadata = {
  title: "NoteEase",
  description: "A modern, fast, and simple notes app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NotesProvider>{children}</NotesProvider>
      </body>
    </html>
  );
}
